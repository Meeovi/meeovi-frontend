import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_logOrderByWithAggregationInput } from "../../../inputs/Import_export_logOrderByWithAggregationInput";
import { Import_export_logScalarWhereWithAggregatesInput } from "../../../inputs/Import_export_logScalarWhereWithAggregatesInput";
import { Import_export_logWhereInput } from "../../../inputs/Import_export_logWhereInput";
import { Import_export_logScalarFieldEnum } from "../../../../enums/Import_export_logScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByImport_export_logArgs {
  @TypeGraphQL.Field(_type => Import_export_logWhereInput, {
    nullable: true
  })
  where?: Import_export_logWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Import_export_logOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_logScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "activity" | "state" | "records" | "username" | "profile_name" | "user_id" | "profile_id" | "file_id" | "created_at" | "updated_at" | "config" | "result" | "invalid_records_log_id">;

  @TypeGraphQL.Field(_type => Import_export_logScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Import_export_logScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
