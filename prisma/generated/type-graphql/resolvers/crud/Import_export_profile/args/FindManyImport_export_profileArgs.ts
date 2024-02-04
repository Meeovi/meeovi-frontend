import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Import_export_profileOrderByWithRelationAndSearchRelevanceInput";
import { Import_export_profileWhereInput } from "../../../inputs/Import_export_profileWhereInput";
import { Import_export_profileWhereUniqueInput } from "../../../inputs/Import_export_profileWhereUniqueInput";
import { Import_export_profileScalarFieldEnum } from "../../../../enums/Import_export_profileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  where?: Import_export_profileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Import_export_profileOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Import_export_profileWhereUniqueInput, {
    nullable: true
  })
  cursor?: Import_export_profileWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "system_default" | "source_entity" | "file_type" | "delimiter" | "enclosure" | "type" | "mapping" | "update_by" | "created_at" | "updated_at" | "config"> | undefined;
}
