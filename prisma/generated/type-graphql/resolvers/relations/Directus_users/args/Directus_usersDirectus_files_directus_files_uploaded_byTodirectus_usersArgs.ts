import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Directus_filesOrderByWithRelationAndSearchRelevanceInput";
import { Directus_filesWhereInput } from "../../../inputs/Directus_filesWhereInput";
import { Directus_filesWhereUniqueInput } from "../../../inputs/Directus_filesWhereUniqueInput";
import { Directus_filesScalarFieldEnum } from "../../../../enums/Directus_filesScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class Directus_usersDirectus_files_directus_files_uploaded_byTodirectus_usersArgs {
  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  where?: Directus_filesWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Directus_filesOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Directus_filesWhereUniqueInput, {
    nullable: true
  })
  cursor?: Directus_filesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Directus_filesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "storage" | "filename_disk" | "filename_download" | "title" | "type" | "folder" | "uploaded_by" | "uploaded_on" | "modified_by" | "modified_on" | "charset" | "filesize" | "width" | "height" | "duration" | "embed" | "description" | "location" | "tags" | "metadata"> | undefined;
}
