import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_profileOrderByWithAggregationInput } from "../../../inputs/Import_export_profileOrderByWithAggregationInput";
import { Import_export_profileScalarWhereWithAggregatesInput } from "../../../inputs/Import_export_profileScalarWhereWithAggregatesInput";
import { Import_export_profileWhereInput } from "../../../inputs/Import_export_profileWhereInput";
import { Import_export_profileScalarFieldEnum } from "../../../../enums/Import_export_profileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByImport_export_profileArgs {
  @TypeGraphQL.Field(_type => Import_export_profileWhereInput, {
    nullable: true
  })
  where?: Import_export_profileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Import_export_profileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_profileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "system_default" | "source_entity" | "file_type" | "delimiter" | "enclosure" | "type" | "mapping" | "update_by" | "created_at" | "updated_at" | "config">;

  @TypeGraphQL.Field(_type => Import_export_profileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Import_export_profileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
