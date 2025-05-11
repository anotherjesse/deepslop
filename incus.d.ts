/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Access represents everyone that may access a particular resource. */
export type Access = AccessEntry[];

/** AccessEntry represents an entity having access to the resource. */
export interface AccessEntry {
  /**
   * Certificate fingerprint
   * @example "636b69519d27ae3b0e398cb7928043846ce1e3842f0ca7a589993dd913ab8cc9"
   */
  identifier?: string;
  /**
   * Which authorization method the certificate uses
   * @example "tls, openfga"
   */
  provider?: string;
  /**
   * The role associated with the certificate
   * @example "admin, view, operator"
   */
  role?: string;
}

/** Certificate represents a certificate */
export interface Certificate {
  /**
   * The certificate itself, as PEM encoded X509 (or as base64 encoded X509 on POST)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Certificate description
   * @example "X509 certificate"
   */
  description?: string;
  /**
   * SHA256 fingerprint of the certificate
   * @example "fd200419b271f1dc2a5591b693cc5774b7f234e1ff8c6b78ad703b6888fe2b69"
   */
  fingerprint?: string;
  /**
   * Name associated with the certificate
   * @example "castiana"
   */
  name?: string;
  /**
   * List of allowed projects (applies when restricted)
   * @example ["default","foo","bar"]
   */
  projects?: string[];
  /**
   * Whether to limit the certificate to listed projects
   * @example true
   */
  restricted?: boolean;
  /**
   * Usage type for the certificate
   * @example "client"
   */
  type?: string;
}

/** CertificateAddToken represents the fields contained within an encoded certificate add token. */
export interface CertificateAddToken {
  /**
   * The addresses of the server
   * @example ["10.98.30.229:8443"]
   */
  addresses?: string[];
  /**
   * The name of the new client
   * @example "user@host"
   */
  client_name?: string;
  /**
   * The token's expiry date.
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * The fingerprint of the network certificate
   * @example "57bb0ff4340b5bb28517e062023101adf788c37846dc8b619eb2c3cb4ef29436"
   */
  fingerprint?: string;
  /**
   * The random join secret
   * @example "2b2284d44db32675923fe0d2020477e0e9be11801ff70c435e032b97028c35cd"
   */
  secret?: string;
}

/** CertificatePut represents the modifiable fields of a certificate */
export interface CertificatePut {
  /**
   * The certificate itself, as PEM encoded X509 (or as base64 encoded X509 on POST)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Certificate description
   * @example "X509 certificate"
   */
  description?: string;
  /**
   * Name associated with the certificate
   * @example "castiana"
   */
  name?: string;
  /**
   * List of allowed projects (applies when restricted)
   * @example ["default","foo","bar"]
   */
  projects?: string[];
  /**
   * Whether to limit the certificate to listed projects
   * @example true
   */
  restricted?: boolean;
  /**
   * Usage type for the certificate
   * @example "client"
   */
  type?: string;
}

/** CertificatesPost represents the fields of a new certificate */
export interface CertificatesPost {
  /**
   * The certificate itself, as PEM encoded X509 (or as base64 encoded X509 on POST)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Certificate description
   * @example "X509 certificate"
   */
  description?: string;
  /**
   * Name associated with the certificate
   * @example "castiana"
   */
  name?: string;
  /**
   * List of allowed projects (applies when restricted)
   * @example ["default","foo","bar"]
   */
  projects?: string[];
  /**
   * Whether to limit the certificate to listed projects
   * @example true
   */
  restricted?: boolean;
  /**
   * Whether to create a certificate add token
   * @example true
   */
  token?: boolean;
  /**
   * Trust token (used to add an untrusted client)
   * @example "blah"
   */
  trust_token?: string;
  /**
   * Usage type for the certificate
   * @example "client"
   */
  type?: string;
}

/** Cluster represents high-level information about a cluster. */
export interface Cluster {
  /**
   * Whether clustering is enabled
   * @example true
   */
  enabled?: boolean;
  /**
   * List of member configuration keys (used during join)
   * @example []
   */
  member_config?: ClusterMemberConfigKey[];
  /**
   * Name of the cluster member answering the request
   * @example "server01"
   */
  server_name?: string;
}

/** ClusterCertificatePut represents the certificate and key pair for all cluster members */
export interface ClusterCertificatePut {
  /**
   * The new certificate (X509 PEM encoded) for the cluster
   * @example "X509 PEM certificate"
   */
  cluster_certificate?: string;
  /**
   * The new certificate key (X509 PEM encoded) for the cluster
   * @example "X509 PEM certificate key"
   */
  cluster_certificate_key?: string;
}

/** ClusterGroup represents a cluster group. */
export interface ClusterGroup {
  /**
   * Cluster group configuration map
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * The description of the cluster group
   * @example "amd64 servers"
   */
  description?: string;
  /**
   * List of members in this group
   * @example ["server01","server02"]
   */
  members?: string[];
  /**
   * The new name of the cluster group
   * @example "group1"
   */
  name?: string;
}

/** ClusterGroupPost represents the fields required to rename a cluster group. */
export interface ClusterGroupPost {
  /**
   * The new name of the cluster group
   * @example "group1"
   */
  name?: string;
}

/** ClusterGroupPut represents the modifiable fields of a cluster group. */
export interface ClusterGroupPut {
  /**
   * Cluster group configuration map
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * The description of the cluster group
   * @example "amd64 servers"
   */
  description?: string;
  /**
   * List of members in this group
   * @example ["server01","server02"]
   */
  members?: string[];
}

/** ClusterGroupsPost represents the fields available for a new cluster group. */
export interface ClusterGroupsPost {
  /**
   * Cluster group configuration map
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * The description of the cluster group
   * @example "amd64 servers"
   */
  description?: string;
  /**
   * List of members in this group
   * @example ["server01","server02"]
   */
  members?: string[];
  /**
   * The new name of the cluster group
   * @example "group1"
   */
  name?: string;
}

/** ClusterMember represents a member of a cluster. */
export interface ClusterMember {
  /**
   * The primary architecture of the cluster member
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Additional configuration information
   * @example {"scheduler.instance":"all"}
   */
  config?: Record<string, string>;
  /**
   * Whether the cluster member is a database server
   * @example true
   */
  database?: boolean;
  /**
   * Cluster member description
   * @example "AMD Epyc 32c/64t"
   */
  description?: string;
  /**
   * Name of the failure domain for this cluster member
   * @example "rack1"
   */
  failure_domain?: string;
  /**
   * List of cluster groups this member belongs to
   * @example ["group1","group2"]
   */
  groups?: string[];
  /**
   * Additional status information
   * @example "fully operational"
   */
  message?: string;
  /**
   * List of roles held by this cluster member
   * @example ["database"]
   */
  roles?: string[];
  /**
   * Name of the cluster member
   * @example "server01"
   */
  server_name?: string;
  /**
   * Current status
   * @example "Online"
   */
  status?: string;
  /**
   * URL at which the cluster member can be reached
   * @example "https://10.0.0.1:8443"
   */
  url?: string;
}

/**
 * ClusterMemberConfigKey represents a single config key that a new member of
 * the cluster is required to provide when joining.
 * The Value field is empty when getting clustering information with GET
 * 1.0/cluster, and should be filled by the joining server when performing a PUT
 * 1.0/cluster join request.
 */
export interface ClusterMemberConfigKey {
  /**
   * A human friendly description key
   * @example ""source" property for storage pool "local""
   */
  description?: string;
  /**
   * The kind of configuration key (network, storage-pool, ...)
   * @example "storage-pool"
   */
  entity?: string;
  /**
   * The name of the key
   * @example "source"
   */
  key?: string;
  /**
   * The name of the object requiring this key
   * @example "local"
   */
  name?: string;
  /**
   * The value on the answering cluster member
   * @example "/dev/sdb"
   */
  value?: string;
}

/** ClusterMemberJoinToken represents the fields contained within an encoded cluster member join token. */
export interface ClusterMemberJoinToken {
  /**
   * The addresses of existing online cluster members
   * @example ["10.98.30.229:8443"]
   */
  addresses?: string[];
  /**
   * The token's expiry date.
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * The fingerprint of the network certificate
   * @example "57bb0ff4340b5bb28517e062023101adf788c37846dc8b619eb2c3cb4ef29436"
   */
  fingerprint?: string;
  /**
   * The random join secret.
   * @example "2b2284d44db32675923fe0d2020477e0e9be11801ff70c435e032b97028c35cd"
   */
  secret?: string;
  /**
   * The name of the new cluster member
   * @example "server02"
   */
  server_name?: string;
}

/** ClusterMemberPost represents the fields required to rename a cluster member. */
export interface ClusterMemberPost {
  /**
   * The new name of the cluster member
   * @example "server02"
   */
  server_name?: string;
}

/** ClusterMemberPut represents the modifiable fields of a cluster member */
export interface ClusterMemberPut {
  /**
   * Additional configuration information
   * @example {"scheduler.instance":"all"}
   */
  config?: Record<string, string>;
  /**
   * Cluster member description
   * @example "AMD Epyc 32c/64t"
   */
  description?: string;
  /**
   * Name of the failure domain for this cluster member
   * @example "rack1"
   */
  failure_domain?: string;
  /**
   * List of cluster groups this member belongs to
   * @example ["group1","group2"]
   */
  groups?: string[];
  /**
   * List of roles held by this cluster member
   * @example ["database"]
   */
  roles?: string[];
}

/** ClusterMemberState represents the state of a cluster member. */
export interface ClusterMemberState {
  storage_pools?: Record<string, StoragePoolState>;
  sysinfo?: ClusterMemberSysInfo;
}

/** ClusterMemberStatePost represents the fields required to evacuate a cluster member. */
export interface ClusterMemberStatePost {
  /**
   * The action to be performed. Valid actions are "evacuate" and "restore".
   * @example "evacuate"
   */
  action?: string;
  /**
   * Override the configured evacuation mode.
   * @example "stop"
   */
  mode?: string;
}

/** ClusterMemberSysInfo represents the sysinfo of a cluster member. */
export interface ClusterMemberSysInfo {
  /** @format uint64 */
  buffered_ram?: number;
  /** @format uint64 */
  free_ram?: number;
  /** @format uint64 */
  free_swap?: number;
  load_averages?: number[];
  /** @format uint16 */
  processes?: number;
  /** @format uint64 */
  shared_ram?: number;
  /** @format uint64 */
  total_ram?: number;
  /** @format uint64 */
  total_swap?: number;
  /** @format int64 */
  uptime?: number;
}

/** ClusterMembersPost represents the fields required to request a join token to add a member to the cluster. */
export interface ClusterMembersPost {
  /**
   * The name of the new cluster member
   * @example "server02"
   */
  server_name?: string;
}

/** ClusterPut represents the fields required to bootstrap or join a cluster. */
export interface ClusterPut {
  /**
   * The address of the cluster you wish to join
   * @example "10.0.0.1:8443"
   */
  cluster_address?: string;
  /**
   * The expected certificate (X509 PEM encoded) for the cluster
   * @example "X509 PEM certificate"
   */
  cluster_certificate?: string;
  /**
   * The cluster join token for the cluster you're trying to join
   * @example "blah"
   */
  cluster_token?: string;
  /**
   * Whether clustering is enabled
   * @example true
   */
  enabled?: boolean;
  /**
   * List of member configuration keys (used during join)
   * @example []
   */
  member_config?: ClusterMemberConfigKey[];
  /**
   * The local address to use for cluster communication
   * @example "10.0.0.2:8443"
   */
  server_address?: string;
  /**
   * Name of the cluster member answering the request
   * @example "server01"
   */
  server_name?: string;
}

/** Event represents an event entry (over websocket) */
export interface Event {
  /**
   * Originating cluster member
   * @example "server01"
   */
  location?: string;
  /**
   * JSON encoded metadata (see EventLogging, EventLifecycle or Operation)
   * @example {"action":"instance-started","context":{},"source":"/1.0/instances/c1"}
   */
  metadata?: object;
  /**
   * Project the event belongs to.
   * @example "default"
   */
  project?: string;
  /**
   * Time at which the event was sent
   * @format date-time
   * @example "2021-02-24T19:00:45.452649098-05:00"
   */
  timestamp?: string;
  /**
   * Event type (one of operation, logging or lifecycle)
   * @example "lifecycle"
   */
  type?: string;
}

/** Image represents an image */
export interface Image {
  /** List of aliases */
  aliases?: ImageAlias[];
  /**
   * Architecture
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Whether the image should auto-update when a new build is available
   * @example true
   */
  auto_update?: boolean;
  /**
   * Whether the image is an automatically cached remote image
   * @example true
   */
  cached?: boolean;
  /**
   * When the image was originally created
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  created_at?: string;
  /**
   * When the image becomes obsolete
   * @format date-time
   * @example "2025-03-23T20:00:00-04:00"
   */
  expires_at?: string;
  /**
   * Original filename
   * @example "06b86454720d36b20f94e31c6812e05ec51c1b568cf3a8abd273769d213394bb.rootfs"
   */
  filename?: string;
  /**
   * Full SHA-256 fingerprint
   * @example "06b86454720d36b20f94e31c6812e05ec51c1b568cf3a8abd273769d213394bb"
   */
  fingerprint?: string;
  /**
   * Last time the image was used
   * @format date-time
   * @example "2021-03-22T20:39:00.575185384-04:00"
   */
  last_used_at?: string;
  /**
   * List of profiles to use when creating from this image (if none provided by user)
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * Descriptive properties
   * @example {"os":"Ubuntu","release":"jammy","variant":"cloud"}
   */
  properties?: Record<string, string>;
  /**
   * Whether the image is available to unauthenticated users
   * @example false
   */
  public?: boolean;
  /**
   * Size of the image in bytes
   * @format int64
   * @example 272237676
   */
  size?: number;
  /**
   * Type of image (container or virtual-machine)
   * @example "container"
   */
  type?: string;
  /** ImageSource represents the source of an image */
  update_source?: ImageSource;
  /**
   * When the image was added to this server
   * @format date-time
   * @example "2021-03-24T14:18:15.115036787-04:00"
   */
  uploaded_at?: string;
}

/** ImageAlias represents an alias from the alias list of an image */
export interface ImageAlias {
  /**
   * Description of the alias
   * @example "Our preferred Ubuntu image"
   */
  description?: string;
  /**
   * Name of the alias
   * @example "ubuntu-22.04"
   */
  name?: string;
}

/** ImageAliasesEntry represents an image alias */
export interface ImageAliasesEntry {
  /**
   * Alias description
   * @example "Our preferred Ubuntu image"
   */
  description?: string;
  /**
   * Alias name
   * @example "ubuntu-22.04"
   */
  name?: string;
  /**
   * Target fingerprint for the alias
   * @example "06b86454720d36b20f94e31c6812e05ec51c1b568cf3a8abd273769d213394bb"
   */
  target?: string;
  /**
   * Alias type (container or virtual-machine)
   * @example "container"
   */
  type?: string;
}

/** ImageAliasesEntryPost represents the required fields to rename an image alias */
export interface ImageAliasesEntryPost {
  /**
   * Alias name
   * @example "ubuntu-22.04"
   */
  name?: string;
}

/** ImageAliasesEntryPut represents the modifiable fields of an image alias */
export interface ImageAliasesEntryPut {
  /**
   * Alias description
   * @example "Our preferred Ubuntu image"
   */
  description?: string;
  /**
   * Target fingerprint for the alias
   * @example "06b86454720d36b20f94e31c6812e05ec51c1b568cf3a8abd273769d213394bb"
   */
  target?: string;
}

/** ImageAliasesPost represents a new image alias */
export interface ImageAliasesPost {
  /**
   * Alias description
   * @example "Our preferred Ubuntu image"
   */
  description?: string;
  /**
   * Alias name
   * @example "ubuntu-22.04"
   */
  name?: string;
  /**
   * Target fingerprint for the alias
   * @example "06b86454720d36b20f94e31c6812e05ec51c1b568cf3a8abd273769d213394bb"
   */
  target?: string;
  /**
   * Alias type (container or virtual-machine)
   * @example "container"
   */
  type?: string;
}

/** ImageExportPost represents the fields required to export an image */
export interface ImageExportPost {
  /** List of aliases to set on the image */
  aliases?: ImageAlias[];
  /**
   * Remote server certificate
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * List of profiles to use
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * Image receive secret
   * @example "RANDOM-STRING"
   */
  secret?: string;
  /**
   * Target server URL
   * @example "https://1.2.3.4:8443"
   */
  target?: string;
}

/** ImageMetadata represents image metadata (used in image tarball) */
export interface ImageMetadata {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Image creation data (as UNIX epoch)
   * @format int64
   * @example 1620655439
   */
  creation_date?: number;
  /**
   * Image expiry data (as UNIX epoch)
   * @format int64
   * @example 1620685757
   */
  expiry_date?: number;
  /**
   * Descriptive properties
   * @example {"os":"Ubuntu","release":"jammy","variant":"cloud"}
   */
  properties?: Record<string, string>;
  /** Template for files in the image */
  templates?: Record<string, ImageMetadataTemplate>;
}

/** ImageMetadataTemplate represents a template entry in image metadata (used in image tarball) */
export interface ImageMetadataTemplate {
  /**
   * Whether to trigger only if the file is missing
   * @example false
   */
  create_only?: boolean;
  /**
   * The file owner gid.
   * @example "1000"
   */
  gid?: string;
  /**
   * The file permissions.
   * @example "644"
   */
  mode?: string;
  /**
   * Key/value properties to pass to the template
   * @example {"foo":"bar"}
   */
  properties?: Record<string, string>;
  /**
   * The template itself as a valid pongo2 template
   * @example "pongo2-template"
   */
  template?: string;
  /**
   * The file owner uid.
   * @example "1000"
   */
  uid?: string;
  /**
   * When to trigger the template (create, copy or start)
   * @example "create"
   */
  when?: string[];
}

/** ImagePut represents the modifiable fields of an image */
export interface ImagePut {
  /**
   * Whether the image should auto-update when a new build is available
   * @example true
   */
  auto_update?: boolean;
  /**
   * When the image becomes obsolete
   * @format date-time
   * @example "2025-03-23T20:00:00-04:00"
   */
  expires_at?: string;
  /**
   * List of profiles to use when creating from this image (if none provided by user)
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Descriptive properties
   * @example {"os":"Ubuntu","release":"jammy","variant":"cloud"}
   */
  properties?: Record<string, string>;
  /**
   * Whether the image is available to unauthenticated users
   * @example false
   */
  public?: boolean;
}

/** ImageSource represents the source of an image */
export interface ImageSource {
  /**
   * Source alias to download from
   * @example "jammy"
   */
  alias?: string;
  /**
   * Source server certificate (if not trusted by system CA)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Type of image (container or virtual-machine)
   * @example "container"
   */
  image_type?: string;
  /**
   * Source server protocol
   * @example "simplestreams"
   */
  protocol?: string;
  /**
   * URL of the source server
   * @example "https://images.linuxcontainers.org"
   */
  server?: string;
}

/** ImagesPost represents the fields available for a new image */
export interface ImagesPost {
  /**
   * Aliases to add to the image
   * @example [{"name":"foo"},{"name":"bar"}]
   */
  aliases?: ImageAlias[];
  /**
   * Whether the image should auto-update when a new build is available
   * @example true
   */
  auto_update?: boolean;
  /**
   * Compression algorithm to use when turning an instance into an image
   * @example "gzip"
   */
  compression_algorithm?: string;
  /**
   * When the image becomes obsolete
   * @format date-time
   * @example "2025-03-23T20:00:00-04:00"
   */
  expires_at?: string;
  /**
   * Original filename of the image
   * @example "image.tar.xz"
   */
  filename?: string;
  /**
   * Type of image format
   * @example "split"
   */
  format?: string;
  /**
   * List of profiles to use when creating from this image (if none provided by user)
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Descriptive properties
   * @example {"os":"Ubuntu","release":"jammy","variant":"cloud"}
   */
  properties?: Record<string, string>;
  /**
   * Whether the image is available to unauthenticated users
   * @example false
   */
  public?: boolean;
  /** ImagesPostSource represents the source of a new image */
  source?: ImagesPostSource;
}

/** ImagesPostSource represents the source of a new image */
export interface ImagesPostSource {
  /**
   * Source alias to download from
   * @example "jammy"
   */
  alias?: string;
  /**
   * Source server certificate (if not trusted by system CA)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Source image fingerprint (for type "image")
   * @example "8ae945c52bb2f2df51c923b04022312f99bbb72c356251f54fa89ea7cf1df1d0"
   */
  fingerprint?: string;
  /**
   * Type of image (container or virtual-machine)
   * @example "container"
   */
  image_type?: string;
  /**
   * Transfer mode (push or pull)
   * @example "pull"
   */
  mode?: string;
  /**
   * Instance name (for type "instance" or "snapshot")
   * @example "c1/snap0"
   */
  name?: string;
  /**
   * Source project name
   * @example "project1"
   */
  project?: string;
  /**
   * Source server protocol
   * @example "simplestreams"
   */
  protocol?: string;
  /**
   * Source image server secret token (when downloading private images)
   * @example "RANDOM-STRING"
   */
  secret?: string;
  /**
   * URL of the source server
   * @example "https://images.linuxcontainers.org"
   */
  server?: string;
  /**
   * Type of image source (instance, snapshot, image or url)
   * @example "instance"
   */
  type?: string;
  /**
   * Source URL (for type "url")
   * @example "https://some-server.com/some-directory/"
   */
  url?: string;
}

/** InitClusterPreseed represents initialization configuration for the cluster. */
export interface InitClusterPreseed {
  /**
   * The address of the cluster you wish to join
   * @example "10.0.0.1:8443"
   */
  cluster_address?: string;
  /**
   * The expected certificate (X509 PEM encoded) for the cluster
   * @example "X509 PEM certificate"
   */
  cluster_certificate?: string;
  /**
   * The path to the cluster certificate
   * @example "/tmp/cluster.crt"
   */
  cluster_certificate_path?: string;
  /**
   * The cluster join token for the cluster you're trying to join
   * @example "blah"
   */
  cluster_token?: string;
  /**
   * Whether clustering is enabled
   * @example true
   */
  enabled?: boolean;
  /**
   * List of member configuration keys (used during join)
   * @example []
   */
  member_config?: ClusterMemberConfigKey[];
  /**
   * The local address to use for cluster communication
   * @example "10.0.0.2:8443"
   */
  server_address?: string;
  /**
   * Name of the cluster member answering the request
   * @example "server01"
   */
  server_name?: string;
}

/** InitLocalPreseed represents initialization configuration. */
export interface InitLocalPreseed {
  /**
   * Certificates to add
   * @example "PEM encoded certificate"
   */
  certificates?: CertificatesPost[];
  /**
   * Server configuration map (refer to doc/server.md)
   * @example {"core.https_address":":8443"}
   */
  config?: Record<string, string>;
  /**
   * Networks by project to add
   * @example "Network on the "default" project"
   */
  networks?: InitNetworksProjectPost[];
  /**
   * Profiles to add
   * @example ""default" profile with a root disk device"
   */
  profiles?: InitProfileProjectPost[];
  /**
   * Projects to add
   * @example ""default" project"
   */
  projects?: ProjectsPost[];
  /**
   * Storage Pools to add
   * @example "local dir storage pool"
   */
  storage_pools?: StoragePoolsPost[];
  /**
   * Storage Volumes to add
   * @example "local dir storage volume"
   */
  storage_volumes?: InitStorageVolumesProjectPost[];
}

/** InitNetworksProjectPost represents the fields of a new network along with its associated project. */
export interface InitNetworksProjectPost {
  /**
   * Project in which the network will reside
   * @example ""default""
   */
  Project?: string;
  /**
   * Network configuration map (refer to doc/networks.md)
   * @example {"ipv4.address":"10.0.0.1/24","ipv4.nat":"true","ipv6.address":"none"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "My new bridge"
   */
  description?: string;
  /**
   * The name of the new network
   * @example "mybr1"
   */
  name?: string;
  /**
   * The network type (refer to doc/networks.md)
   * @example "bridge"
   */
  type?: string;
}

/** InitPreseed represents initialization configuration that can be supplied to `init`. */
export interface InitPreseed {
  Server?: InitLocalPreseed;
  cluster?: InitClusterPreseed;
}

/** InitProfileProjectPost represents the fields of a new profile along with its associated project. */
export interface InitProfileProjectPost {
  /**
   * Project in which the profile will reside
   * @example ""default""
   */
  Project?: string;
  /**
   * Instance configuration map (refer to doc/instances.md)
   * @example {"limits.cpu":"4","limits.memory":"4GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "Medium size instances"
   */
  description?: string;
  /**
   * List of devices
   * @example {"eth0":{"name":"eth0","network":"mybr0","type":"nic"},"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * The name of the new profile
   * @example "foo"
   */
  name?: string;
}

/** InitStorageVolumesProjectPost represents the fields of a new storage volume along with its associated pool. */
export interface InitStorageVolumesProjectPost {
  /**
   * Storage pool in which the volume will reside
   * @example ""default""
   */
  Pool?: string;
  /**
   * Project in which the volume will reside
   * @example ""default""
   */
  Project?: string;
  /**
   * Storage volume configuration map (refer to doc/storage.md)
   * @example {"size":"50GiB","zfs.remove_snapshots":"true"}
   */
  config?: Record<string, string>;
  /**
   * Volume content type (filesystem or block)
   * @example "filesystem"
   */
  content_type?: string;
  /**
   * Description of the storage volume
   * @example "My custom volume"
   */
  description?: string;
  /**
   * Volume name
   * @example "foo"
   */
  name?: string;
  /**
   * Name of a snapshot to restore
   * @example "snap0"
   */
  restore?: string;
  /** StorageVolumeSource represents the creation source for a new storage volume */
  source?: StorageVolumeSource;
  /**
   * Volume type (container, custom, image or virtual-machine)
   * @example "custom"
   */
  type?: string;
}

/** Instance represents an instance. */
export interface Instance {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Instance configuration (see doc/instances.md)
   * @example {"security.nesting":"true"}
   */
  config?: Record<string, string>;
  /**
   * Instance creation timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  created_at?: string;
  /**
   * Instance description
   * @example "My test instance"
   */
  description?: string;
  /**
   * Instance devices (see doc/instances.md)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * Whether the instance is ephemeral (deleted on shutdown)
   * @example false
   */
  ephemeral?: boolean;
  /**
   * Expanded configuration (all profiles and local config merged)
   * @example {"security.nesting":"true"}
   */
  expanded_config?: Record<string, string>;
  /**
   * Expanded devices (all profiles and local devices merged)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  expanded_devices?: Record<string, Record<string, string>>;
  /**
   * Last start timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  last_used_at?: string;
  /**
   * What cluster member this instance is located on
   * @example "server01"
   */
  location?: string;
  /**
   * Instance name
   * @example "foo"
   */
  name?: string;
  /**
   * List of profiles applied to the instance
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Instance project name
   * @example "foo"
   */
  project?: string;
  /**
   * If set, instance will be restored to the provided snapshot name
   * @example "snap0"
   */
  restore?: string;
  /**
   * Whether the instance currently has saved state on disk
   * @example false
   */
  stateful?: boolean;
  /**
   * Instance status (see instance_state)
   * @example "Running"
   */
  status?: string;
  status_code?: StatusCode;
  /**
   * The type of instance (container or virtual-machine)
   * @example "container"
   */
  type?: string;
}

/** InstanceBackup represents an instance backup. */
export interface InstanceBackup {
  /**
   * When the backup was created
   * @format date-time
   * @example "2021-03-23T16:38:37.753398689-04:00"
   */
  created_at?: string;
  /**
   * When the backup expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Whether to ignore snapshots
   * @example false
   */
  instance_only?: boolean;
  /**
   * Backup name
   * @example "backup0"
   */
  name?: string;
  /**
   * Whether to use a pool-optimized binary format (instead of plain tarball)
   * @example true
   */
  optimized_storage?: boolean;
}

/** InstanceBackupPost represents the fields available for the renaming of a instance backup. */
export interface InstanceBackupPost {
  /**
   * New backup name
   * @example "backup1"
   */
  name?: string;
}

/** InstanceBackupsPost represents the fields available for a new instance backup. */
export interface InstanceBackupsPost {
  /**
   * What compression algorithm to use
   * @example "gzip"
   */
  compression_algorithm?: string;
  /**
   * When the backup expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Whether to ignore snapshots
   * @example false
   */
  instance_only?: boolean;
  /**
   * Backup name
   * @example "backup0"
   */
  name?: string;
  /**
   * Whether to use a pool-optimized binary format (instead of plain tarball)
   * @example true
   */
  optimized_storage?: boolean;
}

/** InstanceConsolePost represents an instance console request. */
export interface InstanceConsolePost {
  /**
   * Forces a connection to the console
   * @example true
   */
  force?: boolean;
  /**
   * Console height in rows (console type only)
   * @format int64
   * @example 24
   */
  height?: number;
  /**
   * Type of console to attach to (console or vga)
   * @example "console"
   */
  type?: string;
  /**
   * Console width in columns (console type only)
   * @format int64
   * @example 80
   */
  width?: number;
}

/** InstanceExecPost represents an instance exec request. */
export interface InstanceExecPost {
  /**
   * Command and its arguments
   * @example ["bash"]
   */
  command?: string[];
  /**
   * Current working directory for the command
   * @example "/home/foo/"
   */
  cwd?: string;
  /**
   * Additional environment to pass to the command
   * @example {"FOO":"BAR"}
   */
  environment?: Record<string, string>;
  /**
   * GID of the user to spawn the command as
   * @format uint32
   * @example 1000
   */
  group?: number;
  /**
   * Terminal height in rows (for interactive)
   * @format int64
   * @example 24
   */
  height?: number;
  /**
   * Whether the command is to be spawned in interactive mode (singled PTY instead of 3 PIPEs)
   * @example true
   */
  interactive?: boolean;
  /** Whether to capture the output for later download (requires non-interactive) */
  "record-output"?: boolean;
  /**
   * UID of the user to spawn the command as
   * @format uint32
   * @example 1000
   */
  user?: number;
  /**
   * Whether to wait for all websockets to be connected before spawning the command
   * @example true
   */
  "wait-for-websocket"?: boolean;
  /**
   * Terminal width in characters (for interactive)
   * @format int64
   * @example 80
   */
  width?: number;
}

/** InstanceFull is a combination of Instance, InstanceBackup, InstanceState and InstanceSnapshot. */
export interface InstanceFull {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /** List of backups. */
  backups?: InstanceBackup[];
  /**
   * Instance configuration (see doc/instances.md)
   * @example {"security.nesting":"true"}
   */
  config?: Record<string, string>;
  /**
   * Instance creation timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  created_at?: string;
  /**
   * Instance description
   * @example "My test instance"
   */
  description?: string;
  /**
   * Instance devices (see doc/instances.md)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * Whether the instance is ephemeral (deleted on shutdown)
   * @example false
   */
  ephemeral?: boolean;
  /**
   * Expanded configuration (all profiles and local config merged)
   * @example {"security.nesting":"true"}
   */
  expanded_config?: Record<string, string>;
  /**
   * Expanded devices (all profiles and local devices merged)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  expanded_devices?: Record<string, Record<string, string>>;
  /**
   * Last start timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  last_used_at?: string;
  /**
   * What cluster member this instance is located on
   * @example "server01"
   */
  location?: string;
  /**
   * Instance name
   * @example "foo"
   */
  name?: string;
  /**
   * List of profiles applied to the instance
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Instance project name
   * @example "foo"
   */
  project?: string;
  /**
   * If set, instance will be restored to the provided snapshot name
   * @example "snap0"
   */
  restore?: string;
  /** List of snapshots. */
  snapshots?: InstanceSnapshot[];
  state?: InstanceState;
  /**
   * Whether the instance currently has saved state on disk
   * @example false
   */
  stateful?: boolean;
  /**
   * Instance status (see instance_state)
   * @example "Running"
   */
  status?: string;
  status_code?: StatusCode;
  /**
   * The type of instance (container or virtual-machine)
   * @example "container"
   */
  type?: string;
}

/** InstancePost represents the fields required to rename/move an instance. */
export interface InstancePost {
  /**
   * Instance configuration file.
   * @example {"security.nesting":"true"}
   */
  Config?: Record<string, string>;
  /**
   * Instance devices.
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  Devices?: Record<string, Record<string, string>>;
  /**
   * List of profiles applied to the instance.
   * @example ["default"]
   */
  Profiles?: string[];
  /**
   * AllowInconsistent allow inconsistent copies when migrating.
   * @example false
   */
  allow_inconsistent?: boolean;
  /**
   * Whether snapshots should be discarded (migration only)
   * @example false
   */
  instance_only?: boolean;
  /**
   * Whether to perform a live migration (migration only)
   * @example false
   */
  live?: boolean;
  /**
   * Whether the instance is being migrated to another server
   * @example false
   */
  migration?: boolean;
  /**
   * New name for the instance
   * @example "bar"
   */
  name?: string;
  /**
   * Target pool for local cross-pool move
   * @example "baz"
   */
  pool?: string;
  /**
   * Target project for local cross-project move
   * @example "foo"
   */
  project?: string;
  target?: InstancePostTarget;
}

/** InstancePostTarget represents the migration target host and operation. */
export interface InstancePostTarget {
  /**
   * The certificate of the migration target
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * The operation URL on the remote target
   * @example "https://1.2.3.4:8443/1.0/operations/5e8e1638-5345-4c2d-bac9-2c79c8577292"
   */
  operation?: string;
  /**
   * Migration websockets credentials
   * @example {"criu":"random-string","migration":"random-string"}
   */
  secrets?: Record<string, string>;
}

/** InstancePut represents the modifiable fields of an instance. */
export interface InstancePut {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Instance configuration (see doc/instances.md)
   * @example {"security.nesting":"true"}
   */
  config?: Record<string, string>;
  /**
   * Instance description
   * @example "My test instance"
   */
  description?: string;
  /**
   * Instance devices (see doc/instances.md)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * Whether the instance is ephemeral (deleted on shutdown)
   * @example false
   */
  ephemeral?: boolean;
  /**
   * List of profiles applied to the instance
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * If set, instance will be restored to the provided snapshot name
   * @example "snap0"
   */
  restore?: string;
  /**
   * Whether the instance currently has saved state on disk
   * @example false
   */
  stateful?: boolean;
}

/** InstanceRebuildPost indicates how to rebuild an instance. */
export interface InstanceRebuildPost {
  source?: InstanceSource;
}

/** InstanceSnapshot represents an instance snapshot. */
export interface InstanceSnapshot {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Instance configuration (see doc/instances.md)
   * @example {"security.nesting":"true"}
   */
  config?: Record<string, string>;
  /**
   * Instance creation timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  created_at?: string;
  /**
   * Instance devices (see doc/instances.md)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * Whether the instance is ephemeral (deleted on shutdown)
   * @example false
   */
  ephemeral?: boolean;
  /**
   * Expanded configuration (all profiles and local config merged)
   * @example {"security.nesting":"true"}
   */
  expanded_config?: Record<string, string>;
  /**
   * Expanded devices (all profiles and local devices merged)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  expanded_devices?: Record<string, Record<string, string>>;
  /**
   * When the snapshot expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Last start timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  last_used_at?: string;
  /**
   * Snapshot name
   * @example "foo"
   */
  name?: string;
  /**
   * List of profiles applied to the instance
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * Size of the snapshot in bytes
   * @format int64
   * @example 143360
   */
  size?: number;
  /**
   * Whether the instance currently has saved state on disk
   * @example false
   */
  stateful?: boolean;
}

/** InstanceSnapshotPost represents the fields required to rename/move an instance snapshot. */
export interface InstanceSnapshotPost {
  /**
   * Whether to perform a live migration (requires migration)
   * @example false
   */
  live?: boolean;
  /**
   * Whether this is a migration request
   * @example false
   */
  migration?: boolean;
  /**
   * New name for the snapshot
   * @example "foo"
   */
  name?: string;
  target?: InstancePostTarget;
}

/** InstanceSnapshotPut represents the modifiable fields of an instance snapshot. */
export interface InstanceSnapshotPut {
  /**
   * When the snapshot expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
}

/** InstanceSnapshotsPost represents the fields available for a new instance snapshot. */
export interface InstanceSnapshotsPost {
  /**
   * When the snapshot expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Snapshot name
   * @example "snap0"
   */
  name?: string;
  /**
   * Whether the snapshot should include runtime state
   * @example false
   */
  stateful?: boolean;
}

/** InstanceSource represents the creation source for a new instance. */
export interface InstanceSource {
  /**
   * Image alias name (for image source)
   * @example "ubuntu/22.04"
   */
  alias?: string;
  /**
   * Whether to ignore errors when copying (e.g. for volatile files)
   * @example false
   */
  allow_inconsistent?: boolean;
  /**
   * Base image fingerprint (for faster migration)
   * @example "ed56997f7c5b48e8d78986d2467a26109be6fb9f2d92e8c7b08eb8b6cec7629a"
   */
  "base-image"?: string;
  /**
   * Certificate (for remote images or migration)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Image fingerprint (for image source)
   * @example "ed56997f7c5b48e8d78986d2467a26109be6fb9f2d92e8c7b08eb8b6cec7629a"
   */
  fingerprint?: string;
  /**
   * Whether the copy should skip the snapshots (for copy)
   * @example false
   */
  instance_only?: boolean;
  /**
   * Whether this is a live migration (for migration)
   * @example false
   */
  live?: boolean;
  /**
   * Whether to use pull or push mode (for migration)
   * @example "pull"
   */
  mode?: string;
  /**
   * Remote operation URL (for migration)
   * @example "https://1.2.3.4:8443/1.0/operations/1721ae08-b6a8-416a-9614-3f89302466e1"
   */
  operation?: string;
  /**
   * Source project name (for copy and local image)
   * @example "blah"
   */
  project?: string;
  /**
   * Image filters (for image source)
   * @example {"os":"Ubuntu","release":"jammy","variant":"cloud"}
   */
  properties?: Record<string, string>;
  /**
   * Protocol name (for remote image)
   * @example "simplestreams"
   */
  protocol?: string;
  /**
   * Whether this is refreshing an existing instance (for migration and copy)
   * @example false
   */
  refresh?: boolean;
  /**
   * Whether to exclude source snapshots earlier than latest target snapshot
   * @example false
   */
  refresh_exclude_older?: boolean;
  /**
   * Remote server secret (for remote private images)
   * @example "RANDOM-STRING"
   */
  secret?: string;
  /**
   * Map of migration websockets (for migration)
   * @example {"criu":"RANDOM-STRING","rsync":"RANDOM-STRING"}
   */
  secrets?: Record<string, string>;
  /**
   * Remote server URL (for remote images)
   * @example "https://images.linuxcontainers.org"
   */
  server?: string;
  /**
   * Existing instance name or snapshot (for copy)
   * @example "foo/snap0"
   */
  source?: string;
  /**
   * Source type
   * @example "image"
   */
  type?: string;
}

/** InstanceState represents an instance's state. */
export interface InstanceState {
  cpu?: InstanceStateCPU;
  /** Disk usage key/value pairs */
  disk?: Record<string, InstanceStateDisk>;
  memory?: InstanceStateMemory;
  /** Network usage key/value pairs */
  network?: Record<string, InstanceStateNetwork>;
  os_info?: InstanceStateOSInfo;
  /**
   * PID of the runtime
   * @format int64
   * @example 7281
   */
  pid?: number;
  /**
   * Number of processes in the instance
   * @format int64
   * @example 50
   */
  processes?: number;
  /**
   * The time that the instance started at
   *
   * API extension: instance_state_started_at.
   * @format date-time
   */
  started_at?: string;
  /**
   * Current status (Running, Stopped, Frozen or Error)
   * @example "Running"
   */
  status?: string;
  status_code?: StatusCode;
}

/** InstanceStateCPU represents the cpu information section of an instance's state. */
export interface InstanceStateCPU {
  /**
   * CPU time available per second, in nanoseconds
   * @format int64
   * @example 4000000000
   */
  allocated_time?: number;
  /**
   * CPU usage in nanoseconds
   * @format int64
   * @example 3637691016
   */
  usage?: number;
}

/** InstanceStateDisk represents the disk information section of an instance's state. */
export interface InstanceStateDisk {
  /**
   * Total size in bytes
   * @format int64
   * @example 502239232
   */
  total?: number;
  /**
   * Disk usage in bytes
   * @format int64
   * @example 502239232
   */
  usage?: number;
}

/** InstanceStateMemory represents the memory information section of an instance's state. */
export interface InstanceStateMemory {
  /**
   * SWAP usage in bytes
   * @format int64
   * @example 12297557
   */
  swap_usage?: number;
  /**
   * Peak SWAP usage in bytes
   * @format int64
   * @example 12297557
   */
  swap_usage_peak?: number;
  /**
   * Total memory size in bytes
   * @format int64
   * @example 12297557
   */
  total?: number;
  /**
   * Memory usage in bytes
   * @format int64
   * @example 73248768
   */
  usage?: number;
  /**
   * Peak memory usage in bytes
   * @format int64
   * @example 73785344
   */
  usage_peak?: number;
}

/** InstanceStateNetwork represents the network information section of an instance's state. */
export interface InstanceStateNetwork {
  /** List of IP addresses */
  addresses?: InstanceStateNetworkAddress[];
  /**
   * InstanceStateNetworkCounters represents packet counters as part of the network section of an
   * instance's state.
   */
  counters?: InstanceStateNetworkCounters;
  /**
   * Name of the interface on the host
   * @example "vethbbcd39c7"
   */
  host_name?: string;
  /**
   * MAC address
   * @example "10:66:6a:0c:ee:dd"
   */
  hwaddr?: string;
  /**
   * MTU (maximum transmit unit) for the interface
   * @format int64
   * @example 1500
   */
  mtu?: number;
  /**
   * Administrative state of the interface (up/down)
   * @example "up"
   */
  state?: string;
  /**
   * Type of interface (broadcast, loopback, point-to-point, ...)
   * @example "broadcast"
   */
  type?: string;
}

/**
 * InstanceStateNetworkAddress represents a network address as part of the network section of an
 * instance's state.
 */
export interface InstanceStateNetworkAddress {
  /**
   * IP address
   * @example "fd42:4c81:5770:1eaf:1266:6aff:fe0c:eedd"
   */
  address?: string;
  /**
   * Network family (inet or inet6)
   * @example "inet6"
   */
  family?: string;
  /**
   * Network mask
   * @example "64"
   */
  netmask?: string;
  /**
   * Address scope (local, link or global)
   * @example "global"
   */
  scope?: string;
}

/**
 * InstanceStateNetworkCounters represents packet counters as part of the network section of an
 * instance's state.
 */
export interface InstanceStateNetworkCounters {
  /**
   * Number of bytes received
   * @format int64
   * @example 192021
   */
  bytes_received?: number;
  /**
   * Number of bytes sent
   * @format int64
   * @example 10888579
   */
  bytes_sent?: number;
  /**
   * Number of errors received
   * @format int64
   * @example 14
   */
  errors_received?: number;
  /**
   * Number of errors sent
   * @format int64
   * @example 41
   */
  errors_sent?: number;
  /**
   * Number of inbound packets dropped
   * @format int64
   * @example 179
   */
  packets_dropped_inbound?: number;
  /**
   * Number of outbound packets dropped
   * @format int64
   * @example 541
   */
  packets_dropped_outbound?: number;
  /**
   * Number of packets received
   * @format int64
   * @example 1748
   */
  packets_received?: number;
  /**
   * Number of packets sent
   * @format int64
   * @example 964
   */
  packets_sent?: number;
}

/** InstanceStateOSInfo represents the operating system information section of an instance's state. */
export interface InstanceStateOSInfo {
  /**
   * FQDN of the instance.
   * @example "myhost.mydomain.local"
   */
  fqdn?: string;
  /**
   * Hostname of the instance.
   * @example "myhost"
   */
  hostname?: string;
  /**
   * Version of the kernel running in the instance.
   * @example "6.1.0-25-amd64"
   */
  kernel_version?: string;
  /**
   * Operating system running in the instance.
   * @example "Debian GNU/Linux"
   */
  os?: string;
  /**
   * Version of the operating system.
   * @example "12 (bookworm)"
   */
  os_version?: string;
}

/** InstanceStatePut represents the modifiable fields of an instance's state. */
export interface InstanceStatePut {
  /**
   * State change action (start, stop, restart, freeze, unfreeze)
   * @example "start"
   */
  action?: string;
  /**
   * Whether to force the action (for stop and restart)
   * @example false
   */
  force?: boolean;
  /**
   * Whether to store the runtime state (for stop)
   * @example false
   */
  stateful?: boolean;
  /**
   * How long to wait (in s) before giving up (when force isn't set)
   * @format int64
   * @example 30
   */
  timeout?: number;
}

/** InstanceType represents the type if instance being returned or requested via the API. */
export type InstanceType = string;

/** InstancesPost represents the fields available for a new instance. */
export interface InstancesPost {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /**
   * Instance configuration (see doc/instances.md)
   * @example {"security.nesting":"true"}
   */
  config?: Record<string, string>;
  /**
   * Instance description
   * @example "My test instance"
   */
  description?: string;
  /**
   * Instance devices (see doc/instances.md)
   * @example {"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * Whether the instance is ephemeral (deleted on shutdown)
   * @example false
   */
  ephemeral?: boolean;
  /**
   * Cloud instance type (AWS, GCP, Azure, ...) to emulate with limits
   * @example "t1.micro"
   */
  instance_type?: string;
  /**
   * Instance name
   * @example "foo"
   */
  name?: string;
  /**
   * List of profiles applied to the instance
   * @example ["default"]
   */
  profiles?: string[];
  /**
   * If set, instance will be restored to the provided snapshot name
   * @example "snap0"
   */
  restore?: string;
  source?: InstanceSource;
  /**
   * Whether to start the instance after creation
   * @example true
   */
  start?: boolean;
  /**
   * Whether the instance currently has saved state on disk
   * @example false
   */
  stateful?: boolean;
  type?: InstanceType;
}

/** InstancesPut represents the fields available for a mass update. */
export interface InstancesPut {
  state?: InstanceStatePut;
}

/** MetadataConfig repreents metadata about configuration keys */
export type MetadataConfig = Record<
  string,
  Record<string, MetadataConfigGroup>
>;

/**
 * MetadataConfigEntityName represents a main API object type
 * Example: instance
 */
export type MetadataConfigEntityName = string;

/** MetadataConfigGroup represents a group of config keys */
export interface MetadataConfigGroup {
  keys?: Record<string, MetadataConfigKey>[];
}

/**
 * MetadataConfigGroupName represents the name of a group of config keys
 * Example: volatile
 */
export type MetadataConfigGroupName = string;

/** MetadataConfigKey describe a configuration key */
export interface MetadataConfigKey {
  /**
   * Condition specifies the condition that must be met for the option to be taken into account
   * @example "container"
   */
  condition?: string;
  /**
   * DefaultDesc specify default value for configuration
   * @example ""`DHCP on eth0`""
   */
  defaultdesc?: string;
  /**
   * LiveUpdate specifies whether the server must be restarted for the option to be updated
   * @example ""no""
   */
  liveupdate?: string;
  /**
   * LongDesc provides long description for the option
   * @example ""Specify the kernel modules as a comma-separated list.""
   */
  longdesc?: string;
  /**
   * Scope defines if option apply to cluster or to the local server
   * @example "global"
   */
  scope?: string;
  /**
   * ShortDesc provides short description for the configuration
   * @example ""Kernel modules to load before starting the instance""
   */
  shortdesc?: string;
  /**
   * Type specifies the type of the option
   * @example "string"
   */
  type?: string;
}

/** MetadataConfiguration represents a server's exposed configuration metadata */
export interface MetadataConfiguration {
  /** MetadataConfig repreents metadata about configuration keys */
  configs?: MetadataConfig;
}

/** Network represents a network */
export interface Network {
  /**
   * Network configuration map (refer to doc/networks.md)
   * @example {"ipv4.address":"10.0.0.1/24","ipv4.nat":"true","ipv6.address":"none"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "My new bridge"
   */
  description?: string;
  /**
   * Cluster members on which the network has been defined
   * @example ["server01","server02","server03"]
   */
  locations?: string[];
  /**
   * Whether this is a managed network
   * @example true
   */
  managed?: boolean;
  /**
   * The network name
   * @example "mybr0"
   */
  name?: string;
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * The state of the network (for managed network in clusters)
   * @example "Created"
   */
  status?: string;
  /**
   * The network type
   * @example "bridge"
   */
  type?: string;
  /**
   * List of URLs of objects using this profile
   * @example ["/1.0/profiles/default","/1.0/instances/c1"]
   */
  used_by?: string[];
}

/** NetworkACL used for displaying an ACL. */
export interface NetworkACL {
  /**
   * ACL configuration map (refer to doc/network-acls.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the ACL
   * @example "Web servers"
   */
  description?: string;
  /** List of egress rules (order independent) */
  egress?: NetworkACLRule[];
  /** List of ingress rules (order independent) */
  ingress?: NetworkACLRule[];
  /**
   * The new name for the ACL
   * @example "bar"
   */
  name?: string;
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * List of URLs of objects using this profile
   * @example ["/1.0/instances/c1","/1.0/instances/v1","/1.0/networks/mybr0"]
   */
  used_by?: string[];
}

/** NetworkACLPost used for renaming an ACL. */
export interface NetworkACLPost {
  /**
   * The new name for the ACL
   * @example "bar"
   */
  name?: string;
}

/** NetworkACLPut used for updating an ACL. */
export interface NetworkACLPut {
  /**
   * ACL configuration map (refer to doc/network-acls.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the ACL
   * @example "Web servers"
   */
  description?: string;
  /** List of egress rules (order independent) */
  egress?: NetworkACLRule[];
  /** List of ingress rules (order independent) */
  ingress?: NetworkACLRule[];
}

/**
 * NetworkACLRule represents a single rule in an ACL ruleset.
 * Refer to doc/network-acls.md for details.
 */
export interface NetworkACLRule {
  /**
   * Action to perform on rule match
   * @example "allow"
   */
  action?: string;
  /**
   * Description of the rule
   * @example "Allow DNS queries to Google DNS"
   */
  description?: string;
  /**
   * Destination address
   * @example "8.8.8.8/32,8.8.4.4/32"
   */
  destination?: string;
  /**
   * Destination port
   * @example "53"
   */
  destination_port?: string;
  /**
   * ICMP message code (for ICMP protocol)
   * @example "0"
   */
  icmp_code?: string;
  /**
   * Type of ICMP message (for ICMP protocol)
   * @example "8"
   */
  icmp_type?: string;
  /**
   * Protocol
   * @example "udp"
   */
  protocol?: string;
  /**
   * Source address
   * @example "@internal"
   */
  source?: string;
  /**
   * Source port
   * @example "1234"
   */
  source_port?: string;
  /**
   * State of the rule
   * @example "enabled"
   */
  state?: string;
}

/** NetworkACLsPost used for creating an ACL. */
export interface NetworkACLsPost {
  /**
   * ACL configuration map (refer to doc/network-acls.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the ACL
   * @example "Web servers"
   */
  description?: string;
  /** List of egress rules (order independent) */
  egress?: NetworkACLRule[];
  /** List of ingress rules (order independent) */
  ingress?: NetworkACLRule[];
  /**
   * The new name for the ACL
   * @example "bar"
   */
  name?: string;
}

/**
 * NetworkAddressSet represents an address set.
 * Refer to doc/howto/network_address_sets.md for details.
 */
export interface NetworkAddressSet {
  /**
   * List of addresses in the set
   * @example ["192.0.0.1","2001:0db8:1234::1"]
   */
  addresses?: string[];
  /**
   * Address set configuration map (refer to doc/network-address-sets.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the address set
   * @example "Web servers"
   */
  description?: string;
  /**
   * The new name of the address set
   * @example ""bar""
   */
  name?: string;
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * List of URLs of objects using this profile
   * @example ["/1.0/network-acls/foo","/1.0/network-acls/bar","/1.0/network-acls/baz"]
   */
  used_by?: string[];
}

/** NetworkAddressSetPost used for renaming an address set. */
export interface NetworkAddressSetPost {
  /**
   * The new name of the address set
   * @example ""bar""
   */
  name?: string;
}

/** NetworkAddressSetPut used for updating an address set. */
export interface NetworkAddressSetPut {
  /**
   * List of addresses in the set
   * @example ["192.0.0.1","2001:0db8:1234::1"]
   */
  addresses?: string[];
  /**
   * Address set configuration map (refer to doc/network-address-sets.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the address set
   * @example "Web servers"
   */
  description?: string;
}

/** NetworkAddressSetsPost used for creating a new address set. */
export interface NetworkAddressSetsPost {
  /**
   * List of addresses in the set
   * @example ["192.0.0.1","2001:0db8:1234::1"]
   */
  addresses?: string[];
  /**
   * Address set configuration map (refer to doc/network-address-sets.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the address set
   * @example "Web servers"
   */
  description?: string;
  /**
   * The new name of the address set
   * @example ""bar""
   */
  name?: string;
}

/**
 * NetworkAllocations used for displaying network addresses used by a consuming entity
 * e.g, instance, network forward, load-balancer, network...
 */
export interface NetworkAllocations {
  /**
   * The network address of the allocation (in CIDR format)
   * @example "192.0.2.1/24"
   */
  addresses?: string;
  /** Hwaddr is the MAC address of the entity consuming the network address */
  hwaddr?: string;
  /** Whether the entity comes from a network that performs egress source NAT */
  nat?: boolean;
  /** Type of the entity consuming the network address */
  type?: string;
  /** Name of the entity consuming the network address */
  used_by?: string;
}

/** NetworkForward used for displaying an network address forward. */
export interface NetworkForward {
  /**
   * Forward configuration map (refer to doc/network-forwards.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the forward listen IP
   * @example "My public IP forward"
   */
  description?: string;
  /**
   * The listen address of the forward
   * @example "192.0.2.1"
   */
  listen_address?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /** Port forwards (optional) */
  ports?: NetworkForwardPort[];
}

/** NetworkForwardPort represents a port specification in a network address forward */
export interface NetworkForwardPort {
  /**
   * Description of the forward port
   * @example "My web server forward"
   */
  description?: string;
  /**
   * ListenPort(s) to forward (comma delimited ranges)
   * @example "80,81,8080-8090"
   */
  listen_port?: string;
  /**
   * Protocol for port forward (either tcp or udp)
   * @example "tcp"
   */
  protocol?: string;
  /**
   * SNAT controls whether to apply a matching SNAT rule to new outgoing traffic from the target
   * @example false
   */
  snat?: boolean;
  /**
   * TargetAddress to forward ListenPorts to
   * @example "198.51.100.2"
   */
  target_address?: string;
  /**
   * TargetPort(s) to forward ListenPorts to (allows for many-to-one)
   * @example "80,81,8080-8090"
   */
  target_port?: string;
}

/** NetworkForwardPut represents the modifiable fields of a network address forward */
export interface NetworkForwardPut {
  /**
   * Forward configuration map (refer to doc/network-forwards.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the forward listen IP
   * @example "My public IP forward"
   */
  description?: string;
  /** Port forwards (optional) */
  ports?: NetworkForwardPort[];
}

/** NetworkForwardsPost represents the fields of a new network address forward */
export interface NetworkForwardsPost {
  /**
   * Forward configuration map (refer to doc/network-forwards.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the forward listen IP
   * @example "My public IP forward"
   */
  description?: string;
  /**
   * The listen address of the forward
   * @example "192.0.2.1"
   */
  listen_address?: string;
  /** Port forwards (optional) */
  ports?: NetworkForwardPort[];
}

/** NetworkIntegration represents a network integration. */
export interface NetworkIntegration {
  /**
   * Integration configuration map (refer to doc/network-integrations.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the network integration
   * @example "OVN interconnection for region1"
   */
  description?: string;
  /**
   * The name of the integration
   * @example "region1"
   */
  name?: string;
  /**
   * The type of integration
   * @example "ovn"
   */
  type?: string;
  /**
   * List of URLs of objects using this network integration
   * @example ["/1.0/networks/foo","/1.0/networks/bar"]
   */
  used_by?: string[];
}

/** NetworkIntegrationPost represents the fields required to rename a network integration */
export interface NetworkIntegrationPost {
  /**
   * The new name for the network integration
   * @example "region2"
   */
  name?: string;
}

/** NetworkIntegrationPut represents the modifiable fields of a network integration */
export interface NetworkIntegrationPut {
  /**
   * Integration configuration map (refer to doc/network-integrations.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the network integration
   * @example "OVN interconnection for region1"
   */
  description?: string;
}

/** NetworkIntegrationsPost represents the fields of a new network integration */
export interface NetworkIntegrationsPost {
  /**
   * Integration configuration map (refer to doc/network-integrations.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the network integration
   * @example "OVN interconnection for region1"
   */
  description?: string;
  /**
   * The name of the integration
   * @example "region1"
   */
  name?: string;
  /**
   * The type of integration
   * @example "ovn"
   */
  type?: string;
}

/** NetworkLease represents a DHCP lease */
export interface NetworkLease {
  /**
   * The IP address
   * @example "10.0.0.98"
   */
  address?: string;
  /**
   * The hostname associated with the record
   * @example "c1"
   */
  hostname?: string;
  /**
   * The MAC address
   * @example "10:66:6a:2c:89:d9"
   */
  hwaddr?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /**
   * The type of record (static or dynamic)
   * @example "dynamic"
   */
  type?: string;
}

/** NetworkLoadBalancer used for displaying a network load balancer */
export interface NetworkLoadBalancer {
  /** Backends (optional) */
  backends?: NetworkLoadBalancerBackend[];
  /**
   * Load balancer configuration map (refer to doc/network-load-balancers.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the load balancer listen IP
   * @example "My public IP load balancer"
   */
  description?: string;
  /**
   * The listen address of the load balancer
   * @example "192.0.2.1"
   */
  listen_address?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /** Port forwards (optional) */
  ports?: NetworkLoadBalancerPort[];
}

/** NetworkLoadBalancerBackend represents a target backend specification in a network load balancer */
export interface NetworkLoadBalancerBackend {
  /**
   * Description of the load balancer backend
   * @example "C1 webserver"
   */
  description?: string;
  /**
   * Name of the load balancer backend
   * @example "c1-http"
   */
  name?: string;
  /**
   * TargetAddress to forward ListenPorts to
   * @example "198.51.100.2"
   */
  target_address?: string;
  /**
   * TargetPort(s) to forward ListenPorts to (allows for many-to-one)
   * @example "80,81,8080-8090"
   */
  target_port?: string;
}

/** NetworkLoadBalancerPort represents a port specification in a network load balancer */
export interface NetworkLoadBalancerPort {
  /**
   * Description of the load balancer port
   * @example "My web server load balancer"
   */
  description?: string;
  /**
   * ListenPort(s) of load balancer (comma delimited ranges)
   * @example "80,81,8080-8090"
   */
  listen_port?: string;
  /**
   * Protocol for load balancer port (either tcp or udp)
   * @example "tcp"
   */
  protocol?: string;
  /**
   * TargetBackend backend names to load balance ListenPorts to
   * @example ["c1-http","c2-http"]
   */
  target_backend?: string[];
}

/** NetworkLoadBalancerPut represents the modifiable fields of a network load balancer */
export interface NetworkLoadBalancerPut {
  /** Backends (optional) */
  backends?: NetworkLoadBalancerBackend[];
  /**
   * Load balancer configuration map (refer to doc/network-load-balancers.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the load balancer listen IP
   * @example "My public IP load balancer"
   */
  description?: string;
  /** Port forwards (optional) */
  ports?: NetworkLoadBalancerPort[];
}

/** NetworkLoadBalancerState is used for showing current state of a load balancer */
export interface NetworkLoadBalancerState {
  backend_health?: Record<string, NetworkLoadBalancerStateBackendHealth>;
}

/** NetworkLoadBalancerStateBackendHealth represents the health of a particular load-balancer backend */
export interface NetworkLoadBalancerStateBackendHealth {
  address?: string;
  ports?: NetworkLoadBalancerStateBackendHealthPort[];
}

/** NetworkLoadBalancerStateBackendHealthPort represents the health status of a particular load-balancer backend port. */
export interface NetworkLoadBalancerStateBackendHealthPort {
  /** @format int64 */
  port?: number;
  protocol?: string;
  status?: string;
}

/** NetworkLoadBalancersPost represents the fields of a new network load balancer */
export interface NetworkLoadBalancersPost {
  /** Backends (optional) */
  backends?: NetworkLoadBalancerBackend[];
  /**
   * Load balancer configuration map (refer to doc/network-load-balancers.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the load balancer listen IP
   * @example "My public IP load balancer"
   */
  description?: string;
  /**
   * The listen address of the load balancer
   * @example "192.0.2.1"
   */
  listen_address?: string;
  /** Port forwards (optional) */
  ports?: NetworkLoadBalancerPort[];
}

/** NetworkPeer used for displaying a network peering. */
export interface NetworkPeer {
  /**
   * Peer configuration map (refer to doc/network-peers.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the peer
   * @example "Peering with network1 in project1"
   */
  description?: string;
  /**
   * Name of the peer
   * @example "project1-network1"
   */
  name?: string;
  /**
   * The state of the peering
   * @example "Pending"
   */
  status?: string;
  /**
   * Name of the target integration
   * @example "ovn-ic1"
   */
  target_integration?: string;
  /**
   * Name of the target network
   * @example "network1"
   */
  target_network?: string;
  /**
   * Name of the target project
   * @example "project1"
   */
  target_project?: string;
  /**
   * Type of peer
   * @example "local"
   */
  type?: string;
  /**
   * List of URLs of objects using this network peering
   * @example ["/1.0/network-acls/test","/1.0/network-acls/foo"]
   */
  used_by?: string[];
}

/** NetworkPeerPut represents the modifiable fields of a network peering */
export interface NetworkPeerPut {
  /**
   * Peer configuration map (refer to doc/network-peers.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the peer
   * @example "Peering with network1 in project1"
   */
  description?: string;
}

/** NetworkPeersPost represents the fields of a new network peering */
export interface NetworkPeersPost {
  /**
   * Peer configuration map (refer to doc/network-peers.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the peer
   * @example "Peering with network1 in project1"
   */
  description?: string;
  /**
   * Name of the peer
   * @example "project1-network1"
   */
  name?: string;
  /**
   * Name of the target integration
   * @example "ovn-ic1"
   */
  target_integration?: string;
  /**
   * Name of the target network
   * @example "network1"
   */
  target_network?: string;
  /**
   * Name of the target project
   * @example "project1"
   */
  target_project?: string;
  /**
   * Type of peer
   * @example "local"
   */
  type?: string;
}

/** NetworkPost represents the fields required to rename a network */
export interface NetworkPost {
  /**
   * The new name for the network
   * @example "mybr1"
   */
  name?: string;
}

/** NetworkPut represents the modifiable fields of a network */
export interface NetworkPut {
  /**
   * Network configuration map (refer to doc/networks.md)
   * @example {"ipv4.address":"10.0.0.1/24","ipv4.nat":"true","ipv6.address":"none"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "My new bridge"
   */
  description?: string;
}

/** NetworkState represents the network state */
export interface NetworkState {
  /** List of addresses */
  addresses?: NetworkStateAddress[];
  /** NetworkStateBond represents bond specific state */
  bond?: NetworkStateBond;
  /** NetworkStateBridge represents bridge specific state */
  bridge?: NetworkStateBridge;
  /** NetworkStateCounters represents packet counters */
  counters?: NetworkStateCounters;
  /**
   * MAC address
   * @example "10:66:6a:5a:83:57"
   */
  hwaddr?: string;
  /**
   * MTU
   * @format int64
   * @example 1500
   */
  mtu?: number;
  /** NetworkStateOVN represents OVN specific state */
  ovn?: NetworkStateOVN;
  /**
   * Link state
   * @example "up"
   */
  state?: string;
  /**
   * Interface type
   * @example "broadcast"
   */
  type?: string;
  /** NetworkStateVLAN represents VLAN specific state */
  vlan?: NetworkStateVLAN;
}

/** NetworkStateAddress represents a network address */
export interface NetworkStateAddress {
  /**
   * IP address
   * @example "10.0.0.1"
   */
  address?: string;
  /**
   * Address family
   * @example "inet"
   */
  family?: string;
  /**
   * IP netmask (CIDR)
   * @example "24"
   */
  netmask?: string;
  /**
   * Address scope
   * @example "global"
   */
  scope?: string;
}

/** NetworkStateBond represents bond specific state */
export interface NetworkStateBond {
  /**
   * Delay on link down (ms)
   * @format uint64
   * @example 0
   */
  down_delay?: number;
  /**
   * List of devices that are part of the bond
   * @example ["eth0","eth1"]
   */
  lower_devices?: string[];
  /**
   * How often to check for link state (ms)
   * @format uint64
   * @example 100
   */
  mii_frequency?: number;
  /**
   * Bond link state
   * @example "up"
   */
  mii_state?: string;
  /**
   * Bonding mode
   * @example "802.3ad"
   */
  mode?: string;
  /**
   * Transmit balancing policy
   * @example "layer3+4"
   */
  transmit_policy?: string;
  /**
   * Delay on link up (ms)
   * @format uint64
   * @example 0
   */
  up_delay?: number;
}

/** NetworkStateBridge represents bridge specific state */
export interface NetworkStateBridge {
  /**
   * Delay on port join (ms)
   * @format uint64
   * @example 1500
   */
  forward_delay?: number;
  /**
   * Bridge ID
   * @example "8000.0a0f7c6edbd9"
   */
  id?: string;
  /**
   * Whether STP is enabled
   * @example false
   */
  stp?: boolean;
  /**
   * List of devices that are in the bridge
   * @example ["eth0","eth1"]
   */
  upper_devices?: string[];
  /**
   * Default VLAN ID
   * @format uint64
   * @example 1
   */
  vlan_default?: number;
  /**
   * Whether VLAN filtering is enabled
   * @example false
   */
  vlan_filtering?: boolean;
}

/** NetworkStateCounters represents packet counters */
export interface NetworkStateCounters {
  /**
   * Number of bytes received
   * @format int64
   * @example 250542118
   */
  bytes_received?: number;
  /**
   * Number of bytes sent
   * @format int64
   * @example 17524040140
   */
  bytes_sent?: number;
  /**
   * Number of packets received
   * @format int64
   * @example 1182515
   */
  packets_received?: number;
  /**
   * Number of packets sent
   * @format int64
   * @example 1567934
   */
  packets_sent?: number;
}

/** NetworkStateOVN represents OVN specific state */
export interface NetworkStateOVN {
  /**
   * OVN network chassis name
   * @example "server01"
   */
  chassis?: string;
  /**
   * OVN logical router name
   * @example "incus-net1-lr"
   */
  logical_router?: string;
  /**
   * OVN logical switch name
   * @example "incus-net1-ls-int"
   */
  logical_switch?: string;
  /**
   * OVN network uplink ipv4 address
   * @example "10.0.0.1"
   */
  uplink_ipv4?: string;
  /**
   * OVN network uplink ipv6 address
   * @example "2001:0000:130F:0000:0000:09C0:876A:130B."
   */
  uplink_ipv6?: string;
}

/** NetworkStateVLAN represents VLAN specific state */
export interface NetworkStateVLAN {
  /**
   * Parent device
   * @example "eth0"
   */
  lower_device?: string;
  /**
   * VLAN ID
   * @format uint64
   * @example 100
   */
  vid?: number;
}

/** NetworkZone represents a network zone (DNS). */
export interface NetworkZone {
  /**
   * Zone configuration map (refer to doc/network-zones.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the network zone
   * @example "Internal domain"
   */
  description?: string;
  /**
   * The name of the zone (DNS domain name)
   * @example "example.net"
   */
  name?: string;
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * List of URLs of objects using this network zone
   * @example ["/1.0/networks/foo","/1.0/networks/bar"]
   */
  used_by?: string[];
}

/** NetworkZonePut represents the modifiable fields of a network zone */
export interface NetworkZonePut {
  /**
   * Zone configuration map (refer to doc/network-zones.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the network zone
   * @example "Internal domain"
   */
  description?: string;
}

/** NetworkZoneRecord represents a network zone (DNS) record. */
export interface NetworkZoneRecord {
  /**
   * Advanced configuration for the record
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the record
   * @example "SPF record"
   */
  description?: string;
  /** Entries in the record */
  entries?: NetworkZoneRecordEntry[];
  /**
   * The name of the record
   * @example "@"
   */
  name?: string;
}

/** NetworkZoneRecordEntry represents the fields in a record entry */
export interface NetworkZoneRecordEntry {
  /**
   * TTL for the entry
   * @format uint64
   * @example 3600
   */
  ttl?: number;
  /**
   * Type of DNS entry
   * @example "TXT"
   */
  type?: string;
  /**
   * Value for the record
   * @example "v=spf1 mx ~all"
   */
  value?: string;
}

/** NetworkZoneRecordPut represents the modifiable fields of a network zone record */
export interface NetworkZoneRecordPut {
  /**
   * Advanced configuration for the record
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the record
   * @example "SPF record"
   */
  description?: string;
  /** Entries in the record */
  entries?: NetworkZoneRecordEntry[];
}

/** NetworkZoneRecordsPost represents the fields of a new network zone record */
export interface NetworkZoneRecordsPost {
  /**
   * Advanced configuration for the record
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the record
   * @example "SPF record"
   */
  description?: string;
  /** Entries in the record */
  entries?: NetworkZoneRecordEntry[];
  /**
   * The record name in the zone
   * @example "@"
   */
  name?: string;
}

/** NetworkZonesPost represents the fields of a new network zone */
export interface NetworkZonesPost {
  /**
   * Zone configuration map (refer to doc/network-zones.md)
   * @example {"user.mykey":"foo"}
   */
  config?: Record<string, string>;
  /**
   * Description of the network zone
   * @example "Internal domain"
   */
  description?: string;
  /**
   * The name of the zone (DNS domain name)
   * @example "example.net"
   */
  name?: string;
}

/** NetworksPost represents the fields of a new network */
export interface NetworksPost {
  /**
   * Network configuration map (refer to doc/networks.md)
   * @example {"ipv4.address":"10.0.0.1/24","ipv4.nat":"true","ipv6.address":"none"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "My new bridge"
   */
  description?: string;
  /**
   * The name of the new network
   * @example "mybr1"
   */
  name?: string;
  /**
   * The network type (refer to doc/networks.md)
   * @example "bridge"
   */
  type?: string;
}

/** Operation represents a background operation */
export interface Operation {
  /**
   * Type of operation (task, token or websocket)
   * @example "websocket"
   */
  class?: string;
  /**
   * Operation creation time
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  created_at?: string;
  /**
   * Description of the operation
   * @example "Executing command"
   */
  description?: string;
  /**
   * Operation error message
   * @example "Some error message"
   */
  err?: string;
  /**
   * UUID of the operation
   * @example "6916c8a6-9b7d-4abd-90b3-aedfec7ec7da"
   */
  id?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /**
   * Whether the operation can be canceled
   * @example false
   */
  may_cancel?: boolean;
  /**
   * Operation specific metadata
   * @example {"command":["bash"],"environment":{"HOME":"/root","LANG":"C.UTF-8","PATH":"/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin","TERM":"xterm","USER":"root"},"fds":{"0":"da3046cf02c0116febf4ef3fe4eaecdf308e720c05e5a9c730ce1a6f15417f66","1":"05896879d8692607bd6e4a09475667da3b5f6714418ab0ee0e5720b4c57f754b"},"interactive":true}
   */
  metadata?: Record<string, any>;
  /**
   * Affected resources
   * @example {"instances":["/1.0/instances/foo"]}
   */
  resources?: Record<string, string[]>;
  /**
   * Status name
   * @example "Running"
   */
  status?: string;
  status_code?: StatusCode;
  /**
   * Operation last change
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  updated_at?: string;
}

/** Profile represents a profile */
export interface Profile {
  /**
   * Instance configuration map (refer to doc/instances.md)
   * @example {"limits.cpu":"4","limits.memory":"4GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "Medium size instances"
   */
  description?: string;
  /**
   * List of devices
   * @example {"eth0":{"name":"eth0","network":"mybr0","type":"nic"},"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * The profile name
   * @example "foo"
   */
  name?: string;
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * List of URLs of objects using this profile
   * @example ["/1.0/instances/c1","/1.0/instances/v1"]
   */
  used_by?: string[];
}

/** ProfilePost represents the fields required to rename a profile */
export interface ProfilePost {
  /**
   * The new name for the profile
   * @example "bar"
   */
  name?: string;
}

/** ProfilePut represents the modifiable fields of a profile */
export interface ProfilePut {
  /**
   * Instance configuration map (refer to doc/instances.md)
   * @example {"limits.cpu":"4","limits.memory":"4GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "Medium size instances"
   */
  description?: string;
  /**
   * List of devices
   * @example {"eth0":{"name":"eth0","network":"mybr0","type":"nic"},"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
}

/** ProfilesPost represents the fields of a new profile */
export interface ProfilesPost {
  /**
   * Instance configuration map (refer to doc/instances.md)
   * @example {"limits.cpu":"4","limits.memory":"4GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the profile
   * @example "Medium size instances"
   */
  description?: string;
  /**
   * List of devices
   * @example {"eth0":{"name":"eth0","network":"mybr0","type":"nic"},"root":{"path":"/","pool":"default","type":"disk"}}
   */
  devices?: Record<string, Record<string, string>>;
  /**
   * The name of the new profile
   * @example "foo"
   */
  name?: string;
}

/** Project represents a project */
export interface Project {
  /**
   * Project configuration map (refer to doc/projects.md)
   * @example {"features.networks":"false","features.profiles":"true"}
   */
  config?: Record<string, string>;
  /**
   * Description of the project
   * @example "My new project"
   */
  description?: string;
  /**
   * The project name
   * @example "foo"
   */
  name?: string;
  /**
   * List of URLs of objects using this project
   * @example ["/1.0/images/0e60015346f06627f10580d56ac7fffd9ea775f6d4f25987217d5eed94910a20","/1.0/instances/c1","/1.0/networks/mybr0","/1.0/profiles/default","/1.0/storage-pools/default/volumes/custom/blah"]
   */
  used_by?: string[];
}

/** ProjectPost represents the fields required to rename a project */
export interface ProjectPost {
  /**
   * The new name for the project
   * @example "bar"
   */
  name?: string;
}

/** ProjectPut represents the modifiable fields of a project */
export interface ProjectPut {
  /**
   * Project configuration map (refer to doc/projects.md)
   * @example {"features.networks":"false","features.profiles":"true"}
   */
  config?: Record<string, string>;
  /**
   * Description of the project
   * @example "My new project"
   */
  description?: string;
}

/** ProjectState represents the current running state of a project */
export interface ProjectState {
  /**
   * Allocated and used resources
   * @example {"containers":{"limit":10,"usage":4},"cpu":{"limit":20,"usage":16}}
   */
  resources?: Record<string, ProjectStateResource>;
}

/** ProjectStateResource represents the state of a particular resource in a project */
export interface ProjectStateResource {
  /**
   * Limit for the resource (-1 if none)
   * @format int64
   * @example 10
   */
  Limit?: number;
  /**
   * Current usage for the resource
   * @format int64
   * @example 4
   */
  Usage?: number;
}

/** ProjectsPost represents the fields of a new project */
export interface ProjectsPost {
  /**
   * Project configuration map (refer to doc/projects.md)
   * @example {"features.networks":"false","features.profiles":"true"}
   */
  config?: Record<string, string>;
  /**
   * Description of the project
   * @example "My new project"
   */
  description?: string;
  /**
   * The name of the new project
   * @example "foo"
   */
  name?: string;
}

/** Resources represents the system hardware resources */
export interface Resources {
  /** ResourcesCPU represents the cpu resources available on the system */
  cpu?: ResourcesCPU;
  /** ResourcesGPU represents the GPU resources available on the system */
  gpu?: ResourcesGPU;
  /** ResourcesLoad represents system load information */
  load?: ResourcesLoad;
  /** ResourcesMemory represents the memory resources available on the system */
  memory?: ResourcesMemory;
  /** ResourcesNetwork represents the network cards available on the system */
  network?: ResourcesNetwork;
  /** ResourcesPCI represents the PCI devices available on the system */
  pci?: ResourcesPCI;
  /** ResourcesStorage represents the local storage */
  storage?: ResourcesStorage;
  /** ResourcesSystem represents the system */
  system?: ResourcesSystem;
  /** ResourcesUSB represents the USB devices available on the system */
  usb?: ResourcesUSB;
}

/** ResourcesCPU represents the cpu resources available on the system */
export interface ResourcesCPU {
  /**
   * Architecture name
   * @example "x86_64"
   */
  architecture?: string;
  /** List of CPU sockets */
  sockets?: ResourcesCPUSocket[];
  /**
   * Total number of CPU threads (from all sockets and cores)
   * @format uint64
   * @example 1
   */
  total?: number;
}

/** ResourcesCPUCache represents a CPU cache */
export interface ResourcesCPUCache {
  /**
   * Cache level (usually a number from 1 to 3)
   * @format uint64
   * @example 1
   */
  level?: number;
  /**
   * Size of the cache (in bytes)
   * @format uint64
   * @example 32768
   */
  size?: number;
  /**
   * Type of cache (Data, Instruction, Unified, ...)
   * @example "Data"
   */
  type?: string;
}

/** ResourcesCPUCore represents a CPU core on the system */
export interface ResourcesCPUCore {
  /**
   * Core identifier within the socket
   * @format uint64
   * @example 0
   */
  core?: number;
  /**
   * What die the CPU is a part of (for chiplet designs)
   * @format uint64
   * @example 0
   */
  die?: number;
  /**
   * List of CPU flags
   * @example []
   */
  flags?: string[];
  /**
   * Current frequency
   * @format uint64
   * @example 3500
   */
  frequency?: number;
  /** List of threads */
  threads?: ResourcesCPUThread[];
}

/** ResourcesCPUSocket represents a CPU socket on the system */
export interface ResourcesCPUSocket {
  /** List of CPU caches */
  cache?: ResourcesCPUCache[];
  /** List of CPU cores */
  cores?: ResourcesCPUCore[];
  /**
   * Current CPU frequency (Mhz)
   * @format uint64
   * @example 3499
   */
  frequency?: number;
  /**
   * Minimum CPU frequency (Mhz)
   * @format uint64
   * @example 400
   */
  frequency_minimum?: number;
  /**
   * Maximum CPU frequency (Mhz)
   * @format uint64
   * @example 3500
   */
  frequency_turbo?: number;
  /**
   * Product name
   * @example "Intel(R) Core(TM) i5-7300U CPU @ 2.60GHz"
   */
  name?: string;
  /**
   * Socket number
   * @format uint64
   * @example 0
   */
  socket?: number;
  /**
   * Vendor name
   * @example "GenuineIntel"
   */
  vendor?: string;
}

/** ResourcesCPUThread represents a CPU thread on the system */
export interface ResourcesCPUThread {
  /**
   * Thread ID (used for CPU pinning)
   * @format int64
   * @example 0
   */
  id?: number;
  /**
   * Whether the thread has been isolated (outside of normal scheduling)
   * @example false
   */
  isolated?: boolean;
  /**
   * NUMA node the thread is a part of
   * @format uint64
   * @example 0
   */
  numa_node?: number;
  /**
   * Whether the thread is online (enabled)
   * @example true
   */
  online?: boolean;
  /**
   * Thread identifier within the core
   * @format uint64
   * @example 0
   */
  thread?: number;
}

/** ResourcesGPU represents the GPU resources available on the system */
export interface ResourcesGPU {
  /** List of GPUs */
  cards?: ResourcesGPUCard[];
  /**
   * Total number of GPUs
   * @format uint64
   * @example 1
   */
  total?: number;
}

/** ResourcesGPUCard represents a GPU card on the system */
export interface ResourcesGPUCard {
  /**
   * Kernel driver currently associated with the GPU
   * @example "i915"
   */
  driver?: string;
  /**
   * Version of the kernel driver
   * @example "5.8.0-36-generic"
   */
  driver_version?: string;
  /** ResourcesGPUCardDRM represents the Linux DRM configuration of the GPU */
  drm?: ResourcesGPUCardDRM;
  /**
   * Map of available mediated device profiles
   * @example null
   */
  mdev?: Record<string, ResourcesGPUCardMdev>;
  /**
   * NUMA node the GPU is a part of
   * @format uint64
   * @example 0
   */
  numa_node?: number;
  /** ResourcesGPUCardNvidia represents additional information for NVIDIA GPUs */
  nvidia?: ResourcesGPUCardNvidia;
  /**
   * PCI address
   * @example "0000:00:02.0"
   */
  pci_address?: string;
  /**
   * Name of the product
   * @example "HD Graphics 620"
   */
  product?: string;
  /**
   * PCI ID of the product
   * @example "5916"
   */
  product_id?: string;
  /** ResourcesGPUCardSRIOV represents the SRIOV configuration of the GPU */
  sriov?: ResourcesGPUCardSRIOV;
  /**
   * USB address (for USB cards)
   * @example "2:7"
   */
  usb_address?: string;
  /**
   * Name of the vendor
   * @example "Intel Corporation"
   */
  vendor?: string;
  /**
   * PCI ID of the vendor
   * @example "8086"
   */
  vendor_id?: string;
}

/** ResourcesGPUCardDRM represents the Linux DRM configuration of the GPU */
export interface ResourcesGPUCardDRM {
  /**
   * Card device number
   * @example "226:0"
   */
  card_device?: string;
  /**
   * Card device name
   * @example "card0"
   */
  card_name?: string;
  /**
   * Control device number
   * @example "226:0"
   */
  control_device?: string;
  /**
   * Control device name
   * @example "controlD64"
   */
  control_name?: string;
  /**
   * DRM card ID
   * @format uint64
   * @example 0
   */
  id?: number;
  /**
   * Render device number
   * @example "226:128"
   */
  render_device?: string;
  /**
   * Render device name
   * @example "renderD128"
   */
  render_name?: string;
}

/** ResourcesGPUCardMdev represents the mediated devices configuration of the GPU */
export interface ResourcesGPUCardMdev {
  /**
   * The mechanism used by this device
   * @example "vfio-pci"
   */
  api?: string;
  /**
   * Number of available devices of this profile
   * @format uint64
   * @example 2
   */
  available?: number;
  /**
   * Profile description
   * @example "low_gm_size: 128MB\nhigh_gm_size: 512MB\nfence: 4\nresolution: 1920x1200\nweight: 4"
   */
  description?: string;
  /**
   * List of active devices (UUIDs)
   * @example ["42200aac-0977-495c-8c9e-6c51b9092a01","b4950c00-1437-41d9-88f6-28d61cf9b9ef"]
   */
  devices?: string[];
  /**
   * Profile name
   * @example "i915-GVTg_V5_8"
   */
  name?: string;
}

/** ResourcesGPUCardNvidia represents additional information for NVIDIA GPUs */
export interface ResourcesGPUCardNvidia {
  /**
   * Architecture (generation)
   * @example "3.5"
   */
  architecture?: string;
  /**
   * Brand name
   * @example "GeForce"
   */
  brand?: string;
  /**
   * Card device number
   * @example "195:0"
   */
  card_device?: string;
  /**
   * Card device name
   * @example "nvidia0"
   */
  card_name?: string;
  /**
   * Version of the CUDA API
   * @example "11.0"
   */
  cuda_version?: string;
  /**
   * Model name
   * @example "GeForce GT 730"
   */
  model?: string;
  /**
   * Version of the NVRM (usually driver version)
   * @example "450.102.04"
   */
  nvrm_version?: string;
  /**
   * GPU UUID
   * @example "GPU-6ddadebd-dafe-2db9-f10f-125719770fd3"
   */
  uuid?: string;
}

/** ResourcesGPUCardSRIOV represents the SRIOV configuration of the GPU */
export interface ResourcesGPUCardSRIOV {
  /**
   * Number of VFs currently configured
   * @format uint64
   * @example 0
   */
  current_vfs?: number;
  /**
   * Maximum number of supported VFs
   * @format uint64
   * @example 0
   */
  maximum_vfs?: number;
  /**
   * List of VFs (as additional GPU devices)
   * @example null
   */
  vfs?: ResourcesGPUCard[];
}

/** ResourcesLoad represents system load information */
export interface ResourcesLoad {
  /**
   * Load average in the past minute
   * @format double
   * @example 0.69
   */
  Average1Min?: number;
  /**
   * Load average in the past 5 minutes
   * @format double
   * @example 1.1
   */
  Average5Min?: number;
  /**
   * Load average in the past 10 minutes
   * @format double
   * @example 1.29
   */
  Average10Min?: number;
  /**
   * The number of active processes
   * @format int64
   * @example 1234
   */
  Processes?: number;
}

/** ResourcesMemory represents the memory resources available on the system */
export interface ResourcesMemory {
  /**
   * Size of memory huge pages (bytes)
   * @format uint64
   * @example 2097152
   */
  hugepages_size?: number;
  /**
   * Total of memory huge pages (bytes)
   * @format uint64
   * @example 429284917248
   */
  hugepages_total?: number;
  /**
   * Used memory huge pages (bytes)
   * @format uint64
   * @example 429284917248
   */
  hugepages_used?: number;
  /**
   * List of NUMA memory nodes
   * @example null
   */
  nodes?: ResourcesMemoryNode[];
  /**
   * Total system memory (bytes)
   * @format uint64
   * @example 687194767360
   */
  total?: number;
  /**
   * Used system memory (bytes)
   * @format uint64
   * @example 557450502144
   */
  used?: number;
}

/** ResourcesMemoryNode represents the node-specific memory resources available on the system */
export interface ResourcesMemoryNode {
  /**
   * Total of memory huge pages (bytes)
   * @format uint64
   * @example 214536552448
   */
  hugepages_total?: number;
  /**
   * Used memory huge pages (bytes)
   * @format uint64
   * @example 214536552448
   */
  hugepages_used?: number;
  /**
   * NUMA node identifier
   * @format uint64
   * @example 0
   */
  numa_node?: number;
  /**
   * Total system memory (bytes)
   * @format uint64
   * @example 343597383680
   */
  total?: number;
  /**
   * Used system memory (bytes)
   * @format uint64
   * @example 264880439296
   */
  used?: number;
}

/** ResourcesNetwork represents the network cards available on the system */
export interface ResourcesNetwork {
  /** List of network cards */
  cards?: ResourcesNetworkCard[];
  /**
   * Total number of network cards
   * @format uint64
   * @example 1
   */
  total?: number;
}

/** ResourcesNetworkCard represents a network card on the system */
export interface ResourcesNetworkCard {
  /**
   * Kernel driver currently associated with the card
   * @example "atlantic"
   */
  driver?: string;
  /**
   * Version of the kernel driver
   * @example "5.8.0-36-generic"
   */
  driver_version?: string;
  /**
   * Current firmware version
   * @example "3.1.100"
   */
  firmware_version?: string;
  /**
   * NUMA node the card is a part of
   * @format uint64
   * @example 0
   */
  numa_node?: number;
  /**
   * PCI address (for PCI cards)
   * @example "0000:0d:00.0"
   */
  pci_address?: string;
  /** List of ports on the card */
  ports?: ResourcesNetworkCardPort[];
  /**
   * Name of the product
   * @example "AQC107 NBase-T/IEEE"
   */
  product?: string;
  /**
   * PCI ID of the product
   * @example "87b1"
   */
  product_id?: string;
  /** ResourcesNetworkCardSRIOV represents the SRIOV configuration of the network card */
  sriov?: ResourcesNetworkCardSRIOV;
  /**
   * USB address (for USB cards)
   * @example "2:7"
   */
  usb_address?: string;
  /** ResourcesNetworkCardVDPA represents the VDPA configuration of the network card */
  vdpa?: ResourcesNetworkCardVDPA;
  /**
   * Name of the vendor
   * @example "Aquantia Corp."
   */
  vendor?: string;
  /**
   * PCI ID of the vendor
   * @example "1d6a"
   */
  vendor_id?: string;
}

/** ResourcesNetworkCardPort represents a network port on the system */
export interface ResourcesNetworkCardPort {
  /**
   * MAC address
   * @example "00:23:a4:01:01:6f"
   */
  address?: string;
  /**
   * Whether auto negotiation is used
   * @example true
   */
  auto_negotiation?: boolean;
  /**
   * Port identifier (interface name)
   * @example "eth0"
   */
  id?: string;
  /** ResourcesNetworkCardPortInfiniband represents the Linux Infiniband configuration for the port */
  infiniband?: ResourcesNetworkCardPortInfiniband;
  /**
   * Whether a link was detected
   * @example true
   */
  link_detected?: boolean;
  /**
   * Duplex type
   * @example "full"
   */
  link_duplex?: string;
  /**
   * Current speed (Mbit/s)
   * @format uint64
   * @example 10000
   */
  link_speed?: number;
  /**
   * Port number
   * @format uint64
   * @example 0
   */
  port?: number;
  /**
   * Current port type
   * @example "twisted pair"
   */
  port_type?: string;
  /**
   * Transport protocol
   * @example "ethernet"
   */
  protocol?: string;
  /**
   * List of supported modes
   * @example ["100baseT/Full","1000baseT/Full","2500baseT/Full","5000baseT/Full","10000baseT/Full"]
   */
  supported_modes?: string[];
  /**
   * List of supported port types
   * @example ["twisted pair"]
   */
  supported_ports?: string[];
  /**
   * Type of transceiver used
   * @example "internal"
   */
  transceiver_type?: string;
}

/** ResourcesNetworkCardPortInfiniband represents the Linux Infiniband configuration for the port */
export interface ResourcesNetworkCardPortInfiniband {
  /**
   * ISSM device number
   * @example "231:64"
   */
  issm_device?: string;
  /**
   * ISSM device name
   * @example "issm0"
   */
  issm_name?: string;
  /**
   * MAD device number
   * @example "231:0"
   */
  mad_device?: string;
  /**
   * MAD device name
   * @example "umad0"
   */
  mad_name?: string;
  /**
   * Verb device number
   * @example "231:192"
   */
  verb_device?: string;
  /**
   * Verb device name
   * @example "uverbs0"
   */
  verb_name?: string;
}

/** ResourcesNetworkCardSRIOV represents the SRIOV configuration of the network card */
export interface ResourcesNetworkCardSRIOV {
  /**
   * Number of VFs currently configured
   * @format uint64
   * @example 0
   */
  current_vfs?: number;
  /**
   * Maximum number of supported VFs
   * @format uint64
   * @example 0
   */
  maximum_vfs?: number;
  /**
   * List of VFs (as additional Network devices)
   * @example null
   */
  vfs?: ResourcesNetworkCard[];
}

/** ResourcesNetworkCardVDPA represents the VDPA configuration of the network card */
export interface ResourcesNetworkCardVDPA {
  /** Device identifier of the VDPA device */
  device?: string;
  /** Name of the VDPA device */
  name?: string;
}

/** ResourcesPCI represents the PCI devices available on the system */
export interface ResourcesPCI {
  /** List of PCI devices */
  devices?: ResourcesPCIDevice[];
  /**
   * Total number of PCI devices
   * @format uint64
   * @example 1
   */
  total?: number;
}

/** ResourcesPCIDevice represents a PCI device */
export interface ResourcesPCIDevice {
  /**
   * Kernel driver currently associated with the GPU
   * @example "mgag200"
   */
  driver?: string;
  /**
   * Version of the kernel driver
   * @example "5.8.0-36-generic"
   */
  driver_version?: string;
  /**
   * IOMMU group number
   * @format uint64
   * @example 20
   */
  iommu_group?: number;
  /**
   * NUMA node the card is a part of
   * @format uint64
   * @example 0
   */
  numa_node?: number;
  /**
   * PCI address
   * @example "0000:07:03.0"
   */
  pci_address?: string;
  /**
   * Name of the product
   * @example "MGA G200eW WPCM450"
   */
  product?: string;
  /**
   * PCI ID of the product
   * @example "0532"
   */
  product_id?: string;
  /**
   * Name of the vendor
   * @example "Matrox Electronics Systems Ltd."
   */
  vendor?: string;
  /**
   * PCI ID of the vendor
   * @example "102b"
   */
  vendor_id?: string;
  /** ResourcesPCIVPD represents VPD entries for a device */
  vpd?: ResourcesPCIVPD;
}

/** ResourcesPCIVPD represents VPD entries for a device */
export interface ResourcesPCIVPD {
  /**
   * Vendor provided key/value pairs.
   * @example "{"EC": ""A-5545", "MN": "103C", "V0": "5W PCIeGen2"}"
   */
  entries?: Record<string, string>;
  /**
   * Hardware provided product name.
   * @example "HP Ethernet 1Gb 4-port 331i Adapter"
   */
  product_name?: string;
}

/** ResourcesStorage represents the local storage */
export interface ResourcesStorage {
  /** List of disks */
  disks?: ResourcesStorageDisk[];
  /**
   * Total number of partitions
   * @format uint64
   * @example 1
   */
  total?: number;
}

/** ResourcesStorageDisk represents a disk */
export interface ResourcesStorageDisk {
  /**
   * Block size
   * @format uint64
   * @example 512
   */
  block_size?: number;
  /**
   * Device number
   * @example "259:0"
   */
  device?: string;
  /**
   * Device by-id identifier
   * @example "nvme-eui.0000000001000000e4d25cafae2e4c00"
   */
  device_id?: string;
  /**
   * Device by-path identifier
   * @example "pci-0000:05:00.0-nvme-1"
   */
  device_path?: string;
  /**
   * Current firmware version
   * @example "PSF121C"
   */
  firmware_version?: string;
  /**
   * ID of the disk (device name)
   * @example "nvme0n1"
   */
  id?: string;
  /**
   * Disk model name
   * @example "INTEL SSDPEKKW256G7"
   */
  model?: string;
  /**
   * NUMA node the disk is a part of
   * @format uint64
   * @example 0
   */
  numa_node?: number;
  /** List of partitions */
  partitions?: ResourcesStorageDiskPartition[];
  /**
   * PCI address
   * @example "0000:05:00.0"
   */
  pci_address?: string;
  /**
   * Whether the disk is read-only
   * @example false
   */
  read_only?: boolean;
  /**
   * Whether the disk is removable (hot-plug)
   * @example false
   */
  removable?: boolean;
  /**
   * Rotation speed (RPM)
   * @format uint64
   * @example 0
   */
  rpm?: number;
  /**
   * Serial number
   * @example "BTPY63440ARH256D"
   */
  serial?: string;
  /**
   * Total size of the disk (bytes)
   * @format uint64
   * @example 256060514304
   */
  size?: number;
  /**
   * Storage type
   * @example "nvme"
   */
  type?: string;
  /**
   * USB address
   * @example "3:5"
   */
  usb_address?: string;
  /**
   * WWN identifier
   * @example "eui.0000000001000000e4d25cafae2e4c00"
   */
  wwn?: string;
}

/** ResourcesStorageDiskPartition represents a partition on a disk */
export interface ResourcesStorageDiskPartition {
  /**
   * Device number
   * @example "259:1"
   */
  device?: string;
  /**
   * ID of the partition (device name)
   * @example "nvme0n1p1"
   */
  id?: string;
  /**
   * Partition number
   * @format uint64
   * @example 1
   */
  partition?: number;
  /**
   * Whether the partition is read-only
   * @example false
   */
  read_only?: boolean;
  /**
   * Size of the partition (bytes)
   * @format uint64
   * @example 254933278208
   */
  size?: number;
}

/** ResourcesStoragePool represents the resources available to a given storage pool */
export interface ResourcesStoragePool {
  /** ResourcesStoragePoolInodes represents the inodes available to a given storage pool */
  inodes?: ResourcesStoragePoolInodes;
  /** ResourcesStoragePoolSpace represents the space available to a given storage pool */
  space?: ResourcesStoragePoolSpace;
}

/** ResourcesStoragePoolInodes represents the inodes available to a given storage pool */
export interface ResourcesStoragePoolInodes {
  /**
   * Total inodes
   * @format uint64
   * @example 30709993797
   */
  total?: number;
  /**
   * Used inodes
   * @format uint64
   * @example 23937695
   */
  used?: number;
}

/** ResourcesStoragePoolSpace represents the space available to a given storage pool */
export interface ResourcesStoragePoolSpace {
  /**
   * Total disk space (bytes)
   * @format uint64
   * @example 420100937728
   */
  total?: number;
  /**
   * Used disk space (bytes)
   * @format uint64
   * @example 343537419776
   */
  used?: number;
}

/** ResourcesSystem represents the system */
export interface ResourcesSystem {
  /** ResourcesSystemChassis represents the system chassis */
  chassis?: ResourcesSystemChassis;
  /**
   * System family
   * @example "ThinkPad X1 Carbon 5th"
   */
  family?: string;
  /** ResourcesSystemFirmware represents the system firmware */
  firmware?: ResourcesSystemFirmware;
  /** ResourcesSystemMotherboard represents the motherboard */
  motherboard?: ResourcesSystemMotherboard;
  /**
   * System model
   * @example "20HRCTO1WW"
   */
  product?: string;
  /**
   * System serial number
   * @example "PY3DD4X9"
   */
  serial?: string;
  /**
   * System nanufacturer SKU
   * LENOVO_MT_20HR_BU_Think_FM_ThinkPad X1 Carbon 5th
   */
  sku?: string;
  /**
   * System type (unknown, physical, virtual-machine, container, ...)
   * @example "physical"
   */
  type?: string;
  /**
   * System UUID
   * @example "7fa1c0cc-2271-11b2-a85c-aab32a05d71a"
   */
  uuid?: string;
  /**
   * System vendor
   * @example "LENOVO"
   */
  vendor?: string;
  /**
   * System version
   * @example "ThinkPad X1 Carbon 5th"
   */
  version?: string;
}

/** ResourcesSystemChassis represents the system chassis */
export interface ResourcesSystemChassis {
  /**
   * Chassis serial number
   * @example "PY3DD4X9"
   */
  serial?: string;
  /**
   * Chassis type
   * @example "Notebook"
   */
  type?: string;
  /**
   * Chassis vendor
   * @example "Lenovo"
   */
  vendor?: string;
  /**
   * Chassis version/revision
   * @example "None"
   */
  version?: string;
}

/** ResourcesSystemFirmware represents the system firmware */
export interface ResourcesSystemFirmware {
  /**
   * Firmware build date
   * @example "10/14/2020"
   */
  date?: string;
  /**
   * Firmware vendor
   * @example "Lenovo"
   */
  vendor?: string;
  /**
   * Firmware version
   * @example "N1MET64W (1.49)"
   */
  version?: string;
}

/** ResourcesSystemMotherboard represents the motherboard */
export interface ResourcesSystemMotherboard {
  /**
   * Motherboard model
   * @example "20HRCTO1WW"
   */
  product?: string;
  /**
   * Motherboard serial number
   * @example "L3CF4FX003A"
   */
  serial?: string;
  /**
   * Motherboard vendor
   * @example "Lenovo"
   */
  vendor?: string;
  /**
   * Motherboard version/revision
   * @example "None"
   */
  version?: string;
}

/** ResourcesUSB represents the USB devices available on the system */
export interface ResourcesUSB {
  /** List of USB devices */
  devices?: ResourcesUSBDevice[];
  /**
   * Total number of USB devices
   * @format uint64
   * @example 1
   */
  total?: number;
}

/** ResourcesUSBDevice represents a USB device */
export interface ResourcesUSBDevice {
  /**
   * USB address (bus)
   * @format uint64
   * @example 1
   */
  bus_address?: number;
  /**
   * USB address (device)
   * @format uint64
   * @example 3
   */
  device_address?: number;
  /** List of USB interfaces */
  interfaces?: ResourcesUSBDeviceInterface[];
  /**
   * Name of the product
   * @example "Hermon USB hidmouse Device"
   */
  product?: string;
  /**
   * USB ID of the product
   * @example "2221"
   */
  product_id?: string;
  /**
   * USB serial number
   * @example "DAE005fp"
   */
  serial?: string;
  /**
   * Transfer speed (Mbit/s)
   * @format double
   * @example 12
   */
  speed?: number;
  /**
   * Name of the vendor
   * @example "ATEN International Co., Ltd"
   */
  vendor?: string;
  /**
   * USB ID of the vendor
   * @example "0557"
   */
  vendor_id?: string;
}

/** ResourcesUSBDeviceInterface represents a USB device interface */
export interface ResourcesUSBDeviceInterface {
  /**
   * Class of USB interface
   * @example "Human Interface Device"
   */
  class?: string;
  /**
   * ID of the USB interface class
   * @format uint64
   * @example 3
   */
  class_id?: number;
  /**
   * Kernel driver currently associated with the device
   * @example "usbhid"
   */
  driver?: string;
  /**
   * Version of the kernel driver
   * @example "5.8.0-36-generic"
   */
  driver_version?: string;
  /**
   * Interface number
   * @format uint64
   * @example 0
   */
  number?: number;
  /**
   * Sub class of the interface
   * @example "Boot Interface Subclass"
   */
  subclass?: string;
  /**
   * ID of the USB interface sub class
   * @format uint64
   * @example 1
   */
  subclass_id?: number;
}

/** Server represents a server configuration */
export interface Server {
  /**
   * List of supported API extensions
   * @example ["etag","patch","network","storage"]
   */
  api_extensions?: string[];
  /**
   * Support status of the current API (one of "devel", "stable" or "deprecated")
   * @example "stable"
   */
  api_status?: string;
  /**
   * API version number
   * @example "1.0"
   */
  api_version?: string;
  /**
   * Whether the client is trusted (one of "trusted" or "untrusted")
   * @example "untrusted"
   */
  auth?: string;
  /**
   * List of supported authentication methods
   * @example ["tls"]
   */
  auth_methods?: string[];
  /**
   * The current API user login method
   * @example "unix"
   */
  auth_user_method?: string;
  /**
   * The current API user identifier
   * @example "uid=201105"
   */
  auth_user_name?: string;
  /**
   * Server configuration map (refer to doc/server.md)
   * @example {"core.https_address":":8443"}
   */
  config?: Record<string, string>;
  environment?: ServerEnvironment;
  /**
   * Whether the server is public-only (only public endpoints are implemented)
   * @example false
   */
  public?: boolean;
}

/** ServerEnvironment represents the read-only environment fields of a server configuration. */
export interface ServerEnvironment {
  /**
   * List of addresses the server is listening on
   * @example [":8443"]
   */
  addresses?: string[];
  /**
   * List of architectures supported by the server
   * @example ["x86_64","i686"]
   */
  architectures?: string[];
  /**
   * Server certificate as PEM encoded X509
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Server certificate fingerprint as SHA256
   * @example "fd200419b271f1dc2a5591b693cc5774b7f234e1ff8c6b78ad703b6888fe2b69"
   */
  certificate_fingerprint?: string;
  /**
   * List of supported instance drivers (separate by " | ")
   * @example "lxc | qemu"
   */
  driver?: string;
  /**
   * List of supported instance driver versions (separate by " | ")
   * @example "4.0.7 | 5.2.0"
   */
  driver_version?: string;
  /**
   * Current firewall driver
   * @example "nftables"
   */
  firewall?: string;
  /**
   * OS kernel name
   * @example "Linux"
   */
  kernel?: string;
  /**
   * OS kernel architecture
   * @example "x86_64"
   */
  kernel_architecture?: string;
  /**
   * Map of kernel features that were tested on startup
   * @example {"netnsid_getifaddrs":"true","seccomp_listener":"true"}
   */
  kernel_features?: Record<string, string>;
  /**
   * Kernel version
   * @example "5.4.0-36-generic"
   */
  kernel_version?: string;
  /**
   * Map of LXC features that were tested on startup
   * @example {"cgroup2":"true","devpts_fd":"true","pidfd":"true"}
   */
  lxc_features?: Record<string, string>;
  /**
   * Name of the operating system (Linux distribution)
   * @example "Ubuntu"
   */
  os_name?: string;
  /**
   * Version of the operating system (Linux distribution)
   * @example "22.04"
   */
  os_version?: string;
  /**
   * Current project name
   * @example "default"
   */
  project?: string;
  /**
   * Server implementation name
   * @example "incus"
   */
  server?: string;
  /**
   * Whether the server is part of a cluster
   * @example false
   */
  server_clustered?: boolean;
  /**
   * Mode that the event distribution subsystem is operating in on this server.
   * Either "full-mesh", "hub-server" or "hub-client".
   * @example "full-mesh"
   */
  server_event_mode?: string;
  /**
   * Server hostname
   * @example "castiana"
   */
  server_name?: string;
  /**
   * PID of the daemon
   * @format int64
   * @example 1453969
   */
  server_pid?: number;
  /**
   * Server version
   * @example "4.11"
   */
  server_version?: string;
  /**
   * List of active storage drivers (separate by " | ")
   * @example "dir | zfs"
   */
  storage?: string;
  /** List of supported storage drivers */
  storage_supported_drivers?: ServerStorageDriverInfo[];
  /**
   * List of active storage driver versions (separate by " | ")
   * @example "1 | 0.8.4-1ubuntu11"
   */
  storage_version?: string;
}

/** ServerPut represents the modifiable fields of a server configuration */
export interface ServerPut {
  /**
   * Server configuration map (refer to doc/server.md)
   * @example {"core.https_address":":8443"}
   */
  config?: Record<string, string>;
}

/** ServerStorageDriverInfo represents the read-only info about a storage driver */
export interface ServerStorageDriverInfo {
  /**
   * Name of the driver
   * @example "zfs"
   */
  Name?: string;
  /**
   * Whether the driver has remote volumes
   * @example false
   */
  Remote?: boolean;
  /**
   * Version of the driver
   * @example "0.8.4-1ubuntu11"
   */
  Version?: string;
}

/** ServerUntrusted represents a server configuration for an untrusted client */
export interface ServerUntrusted {
  /**
   * List of supported API extensions
   * @example ["etag","patch","network","storage"]
   */
  api_extensions?: string[];
  /**
   * Support status of the current API (one of "devel", "stable" or "deprecated")
   * @example "stable"
   */
  api_status?: string;
  /**
   * API version number
   * @example "1.0"
   */
  api_version?: string;
  /**
   * Whether the client is trusted (one of "trusted" or "untrusted")
   * @example "untrusted"
   */
  auth?: string;
  /**
   * List of supported authentication methods
   * @example ["tls"]
   */
  auth_methods?: string[];
  /**
   * Server configuration map (refer to doc/server.md)
   * @example {"core.https_address":":8443"}
   */
  config?: Record<string, string>;
  /**
   * Whether the server is public-only (only public endpoints are implemented)
   * @example false
   */
  public?: boolean;
}

/**
 * StatusCode represents a valid operation and container status.
 * @format int64
 */
export type StatusCode = number;

/** StorageBucket represents the fields of a storage pool bucket */
export interface StorageBucket {
  /**
   * Storage bucket configuration map
   * @example {"size":"50GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage bucket
   * @example "My custom bucket"
   */
  description?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /**
   * Bucket name
   * @example "foo"
   */
  name?: string;
  /**
   * Project name
   * @example "project1"
   */
  project?: string;
  /**
   * Bucket S3 URL
   * @example "https://127.0.0.1:8080/foo"
   */
  s3_url?: string;
}

/** StorageBucketBackup represents the fields available for a new storage bucket backup */
export interface StorageBucketBackup {
  /**
   * What compression algorithm to use
   * @example "gzip"
   */
  compression_algorithm?: string;
  /**
   * When the backup expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Backup name
   * @example "backup0"
   */
  name?: string;
}

/** StorageBucketBackupPost represents the fields available for the renaming of a bucket backup */
export interface StorageBucketBackupPost {
  /**
   * New backup name
   * @example "backup1"
   */
  name?: string;
}

/** StorageBucketBackupsPost represents the fields available for a new storage bucket backup */
export interface StorageBucketBackupsPost {
  /**
   * What compression algorithm to use
   * @example "gzip"
   */
  compression_algorithm?: string;
  /**
   * When the backup expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Backup name
   * @example "backup0"
   */
  name?: string;
}

/** StorageBucketKey represents the fields of a storage pool bucket key */
export interface StorageBucketKey {
  /**
   * Access key
   * @example "33UgkaIBLBIxb7O1"
   */
  "access-key"?: string;
  /**
   * Description of the storage bucket key
   * @example "My read-only bucket key"
   */
  description?: string;
  /**
   * Key name
   * @example "my-read-only-key"
   */
  name?: string;
  /**
   * Whether the key can perform write actions or not.
   * @example "read-only"
   */
  role?: string;
  /**
   * Secret key
   * @example "kDQD6AOgwHgaQI1UIJBJpPaiLgZuJbq0"
   */
  "secret-key"?: string;
}

/** StorageBucketKeyPut represents the modifiable fields of a storage pool bucket key */
export interface StorageBucketKeyPut {
  /**
   * Access key
   * @example "33UgkaIBLBIxb7O1"
   */
  "access-key"?: string;
  /**
   * Description of the storage bucket key
   * @example "My read-only bucket key"
   */
  description?: string;
  /**
   * Whether the key can perform write actions or not.
   * @example "read-only"
   */
  role?: string;
  /**
   * Secret key
   * @example "kDQD6AOgwHgaQI1UIJBJpPaiLgZuJbq0"
   */
  "secret-key"?: string;
}

/** StorageBucketKeysPost represents the fields of a new storage pool bucket key */
export interface StorageBucketKeysPost {
  /**
   * Access key
   * @example "33UgkaIBLBIxb7O1"
   */
  "access-key"?: string;
  /**
   * Description of the storage bucket key
   * @example "My read-only bucket key"
   */
  description?: string;
  /**
   * Key name
   * @example "my-read-only-key"
   */
  name?: string;
  /**
   * Whether the key can perform write actions or not.
   * @example "read-only"
   */
  role?: string;
  /**
   * Secret key
   * @example "kDQD6AOgwHgaQI1UIJBJpPaiLgZuJbq0"
   */
  "secret-key"?: string;
}

/** StorageBucketPut represents the modifiable fields of a storage pool bucket */
export interface StorageBucketPut {
  /**
   * Storage bucket configuration map
   * @example {"size":"50GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage bucket
   * @example "My custom bucket"
   */
  description?: string;
}

/** StorageBucketsPost represents the fields of a new storage pool bucket */
export interface StorageBucketsPost {
  /**
   * Storage bucket configuration map
   * @example {"size":"50GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage bucket
   * @example "My custom bucket"
   */
  description?: string;
  /**
   * Bucket name
   * @example "foo"
   */
  name?: string;
}

/** StoragePool represents the fields of a storage pool. */
export interface StoragePool {
  /**
   * Storage pool configuration map (refer to doc/storage.md)
   * @example {"volume.block.filesystem":"ext4","volume.size":"50GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage pool
   * @example "Local SSD pool"
   */
  description?: string;
  /**
   * Storage pool driver (btrfs, ceph, cephfs, cephobject, dir, lvm, lvmcluster or zfs)
   * @example "zfs"
   */
  driver?: string;
  /**
   * Cluster members on which the storage pool has been defined
   * @example ["server01","server02","server03"]
   */
  locations?: string[];
  /**
   * Storage pool name
   * @example "local"
   */
  name?: string;
  /**
   * Pool status (Pending, Created, Errored or Unknown)
   * @example "Created"
   */
  status?: string;
  /**
   * List of URLs of objects using this storage pool
   * @example ["/1.0/profiles/default","/1.0/instances/c1"]
   */
  used_by?: string[];
}

/** StoragePoolPut represents the modifiable fields of a storage pool. */
export interface StoragePoolPut {
  /**
   * Storage pool configuration map (refer to doc/storage.md)
   * @example {"volume.block.filesystem":"ext4","volume.size":"50GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage pool
   * @example "Local SSD pool"
   */
  description?: string;
}

/** StoragePoolState represents the state of a storage pool. */
export interface StoragePoolState {
  /** ResourcesStoragePoolInodes represents the inodes available to a given storage pool */
  inodes?: ResourcesStoragePoolInodes;
  /** ResourcesStoragePoolSpace represents the space available to a given storage pool */
  space?: ResourcesStoragePoolSpace;
}

/** StoragePoolsPost represents the fields of a new storage pool */
export interface StoragePoolsPost {
  /**
   * Storage pool configuration map (refer to doc/storage.md)
   * @example {"volume.block.filesystem":"ext4","volume.size":"50GiB"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage pool
   * @example "Local SSD pool"
   */
  description?: string;
  /**
   * Storage pool driver (btrfs, ceph, cephfs, cephobject, dir, lvm, lvmcluster or zfs)
   * @example "zfs"
   */
  driver?: string;
  /**
   * Storage pool name
   * @example "local"
   */
  name?: string;
}

/** StorageVolume represents the fields of a storage volume. */
export interface StorageVolume {
  /**
   * Storage volume configuration map (refer to doc/storage.md)
   * @example {"size":"50GiB","zfs.remove_snapshots":"true"}
   */
  config?: Record<string, string>;
  /**
   * Volume content type (filesystem or block)
   * @example "filesystem"
   */
  content_type?: string;
  /**
   * Volume creation timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  created_at?: string;
  /**
   * Description of the storage volume
   * @example "My custom volume"
   */
  description?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /**
   * Volume name
   * @example "foo"
   */
  name?: string;
  /**
   * Project containing the volume.
   * @example "default"
   */
  project?: string;
  /**
   * Name of a snapshot to restore
   * @example "snap0"
   */
  restore?: string;
  /**
   * Volume type
   * @example "custom"
   */
  type?: string;
  /**
   * List of URLs of objects using this storage volume
   * @example ["/1.0/instances/blah"]
   */
  used_by?: string[];
}

/** StorageVolumeBackup represents a volume backup */
export interface StorageVolumeBackup {
  /**
   * When the backup was created
   * @format date-time
   * @example "2021-03-23T16:38:37.753398689-04:00"
   */
  created_at?: string;
  /**
   * When the backup expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Backup name
   * @example "backup0"
   */
  name?: string;
  /**
   * Whether to use a pool-optimized binary format (instead of plain tarball)
   * @example true
   */
  optimized_storage?: boolean;
  /**
   * Whether to ignore snapshots
   * @example false
   */
  volume_only?: boolean;
}

/** StorageVolumeBackupPost represents the fields available for the renaming of a volume backup */
export interface StorageVolumeBackupPost {
  /**
   * New backup name
   * @example "backup1"
   */
  name?: string;
}

/** StorageVolumeBackupsPost represents the fields available for a new volume backup */
export interface StorageVolumeBackupsPost {
  /**
   * What compression algorithm to use
   * @example "gzip"
   */
  compression_algorithm?: string;
  /**
   * When the backup expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Backup name
   * @example "backup0"
   */
  name?: string;
  /**
   * Whether to use a pool-optimized binary format (instead of plain tarball)
   * @example true
   */
  optimized_storage?: boolean;
  /**
   * Whether to ignore snapshots
   * @example false
   */
  volume_only?: boolean;
}

/** StorageVolumePost represents the fields required to rename a storage pool volume */
export interface StorageVolumePost {
  /**
   * Initiate volume migration
   * @example false
   */
  migration?: boolean;
  /**
   * New volume name
   * @example "foo"
   */
  name?: string;
  /**
   * New storage pool
   * @example "remote"
   */
  pool?: string;
  /**
   * New project name
   * @example "foo"
   */
  project?: string;
  /** StorageVolumeSource represents the creation source for a new storage volume */
  source?: StorageVolumeSource;
  /** StorageVolumePostTarget represents the migration target host and operation */
  target?: StorageVolumePostTarget;
  /**
   * Whether snapshots should be discarded (migration only)
   * @example false
   */
  volume_only?: boolean;
}

/** StorageVolumePostTarget represents the migration target host and operation */
export interface StorageVolumePostTarget {
  /**
   * The certificate of the migration target
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * Remote operation URL (for migration)
   * @example "https://1.2.3.4:8443/1.0/operations/1721ae08-b6a8-416a-9614-3f89302466e1"
   */
  operation?: string;
  /**
   * Migration websockets credentials
   * @example {"migration":"random-string"}
   */
  secrets?: Record<string, string>;
}

/** StorageVolumePut represents the modifiable fields of a storage volume */
export interface StorageVolumePut {
  /**
   * Storage volume configuration map (refer to doc/storage.md)
   * @example {"size":"50GiB","zfs.remove_snapshots":"true"}
   */
  config?: Record<string, string>;
  /**
   * Description of the storage volume
   * @example "My custom volume"
   */
  description?: string;
  /**
   * Name of a snapshot to restore
   * @example "snap0"
   */
  restore?: string;
}

/** StorageVolumeSnapshot represents a storage volume snapshot */
export interface StorageVolumeSnapshot {
  /**
   * Storage volume configuration map (refer to doc/storage.md)
   * @example {"size":"50GiB","zfs.remove_snapshots":"true"}
   */
  config?: Record<string, string>;
  /**
   * The content type (filesystem or block)
   * @example "filesystem"
   */
  content_type?: string;
  /**
   * Volume snapshot creation timestamp
   * @format date-time
   * @example "2021-03-23T20:00:00-04:00"
   */
  created_at?: string;
  /**
   * Description of the storage volume
   * @example "My custom volume"
   */
  description?: string;
  /**
   * When the snapshot expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Snapshot name
   * @example "snap0"
   */
  name?: string;
}

/** StorageVolumeSnapshotPost represents the fields required to rename/move a storage volume snapshot */
export interface StorageVolumeSnapshotPost {
  /**
   * Initiate volume snapshot migration
   * @example false
   */
  migration?: boolean;
  /**
   * New snapshot name
   * @example "snap1"
   */
  name?: string;
  /** StorageVolumePostTarget represents the migration target host and operation */
  target?: StorageVolumePostTarget;
}

/** StorageVolumeSnapshotPut represents the modifiable fields of a storage volume */
export interface StorageVolumeSnapshotPut {
  /**
   * Description of the storage volume
   * @example "My custom volume"
   */
  description?: string;
  /**
   * When the snapshot expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
}

/** StorageVolumeSnapshotsPost represents the fields available for a new storage volume snapshot */
export interface StorageVolumeSnapshotsPost {
  /**
   * When the snapshot expires (gets auto-deleted)
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  expires_at?: string;
  /**
   * Snapshot name
   * @example "snap0"
   */
  name?: string;
}

/** StorageVolumeSource represents the creation source for a new storage volume */
export interface StorageVolumeSource {
  /**
   * Certificate (for migration)
   * @example "X509 PEM certificate"
   */
  certificate?: string;
  /**
   * What cluster member this record was found on
   * @example "server01"
   */
  location?: string;
  /**
   * Whether to use pull or push mode (for migration)
   * @example "pull"
   */
  mode?: string;
  /**
   * Source volume name (for copy)
   * @example "foo"
   */
  name?: string;
  /**
   * Remote operation URL (for migration)
   * @example "https://1.2.3.4:8443/1.0/operations/1721ae08-b6a8-416a-9614-3f89302466e1"
   */
  operation?: string;
  /**
   * Source storage pool (for copy)
   * @example "local"
   */
  pool?: string;
  /**
   * Source project name
   * @example "foo"
   */
  project?: string;
  /**
   * Whether existing destination volume should be refreshed
   * @example false
   */
  refresh?: boolean;
  /**
   * Whether to exclude source snapshots earlier than latest target snapshot
   * @example false
   */
  refresh_exclude_older?: boolean;
  /**
   * Map of migration websockets (for migration)
   * @example {"rsync":"RANDOM-STRING"}
   */
  secrets?: Record<string, string>;
  /**
   * Source type (copy or migration)
   * @example "copy"
   */
  type?: string;
  /**
   * Whether snapshots should be discarded (for migration)
   * @example false
   */
  volume_only?: boolean;
}

/** StorageVolumeState represents the live state of the volume */
export interface StorageVolumeState {
  /** StorageVolumeStateUsage represents the disk usage of a volume */
  usage?: StorageVolumeStateUsage;
}

/** StorageVolumeStateUsage represents the disk usage of a volume */
export interface StorageVolumeStateUsage {
  /**
   * Storage volume size in bytes
   * @format int64
   * @example 5189222192
   */
  total?: number;
  /**
   * Used space in bytes
   * @format uint64
   * @example 1693552640
   */
  used?: number;
}

/** StorageVolumesPost represents the fields of a new storage pool volume */
export interface StorageVolumesPost {
  /**
   * Storage volume configuration map (refer to doc/storage.md)
   * @example {"size":"50GiB","zfs.remove_snapshots":"true"}
   */
  config?: Record<string, string>;
  /**
   * Volume content type (filesystem or block)
   * @example "filesystem"
   */
  content_type?: string;
  /**
   * Description of the storage volume
   * @example "My custom volume"
   */
  description?: string;
  /**
   * Volume name
   * @example "foo"
   */
  name?: string;
  /**
   * Name of a snapshot to restore
   * @example "snap0"
   */
  restore?: string;
  /** StorageVolumeSource represents the creation source for a new storage volume */
  source?: StorageVolumeSource;
  /**
   * Volume type (container, custom, image or virtual-machine)
   * @example "custom"
   */
  type?: string;
}

/** Warning represents a warning entry. */
export interface Warning {
  /**
   * The number of times this warning occurred
   * @format int64
   * @example 1
   */
  count?: number;
  /**
   * The entity affected by this warning
   * @example "/1.0/instances/c1?project=default"
   */
  entity_url?: string;
  /**
   * The first time this warning occurred
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  first_seen_at?: string;
  /**
   * The warning message
   * @example "Couldn't find the CGroup blkio.weight, disk priority will be ignored"
   */
  last_message?: string;
  /**
   * The last time this warning occurred
   * @format date-time
   * @example "2021-03-23T17:38:37.753398689-04:00"
   */
  last_seen_at?: string;
  /**
   * What cluster member this warning occurred on
   * @example "server01"
   */
  location?: string;
  /**
   * The project the warning occurred in
   * @example "default"
   */
  project?: string;
  /**
   * The severity of this warning
   * @example "low"
   */
  severity?: string;
  /**
   * Status of the warning (new, acknowledged, or resolved)
   * @example "new"
   */
  status?: string;
  /**
   * Type type of warning
   * @example "Couldn't find CGroup"
   */
  type?: string;
  /**
   * UUID of the warning
   * @example "e9e9da0d-2538-4351-8047-46d4a8ae4dbb"
   */
  uuid?: string;
}

/** WarningPut represents the modifiable fields of a warning. */
export interface WarningPut {
  /**
   * Status of the warning (new, acknowledged, or resolved)
   * @example "new"
   */
  status?: string;
}
