import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Import_export_fileOrderByWithAggregationInput } from "../../../inputs/Import_export_fileOrderByWithAggregationInput";
import { Import_export_fileScalarWhereWithAggregatesInput } from "../../../inputs/Import_export_fileScalarWhereWithAggregatesInput";
import { Import_export_fileWhereInput } from "../../../inputs/Import_export_fileWhereInput";
import { Import_export_fileScalarFieldEnum } from "../../../../enums/Import_export_fileScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByImport_export_fileArgs {
  @TypeGraphQL.Field(_type => Import_export_fileWhereInput, {
    nullable: true
  })
  where?: Import_export_fileWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Import_export_fileOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Import_export_fileScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "original_name" | "path" | "expire_date" | "size" | "updated_at" | "created_at" | "access_token">;

  @TypeGraphQL.Field(_type => Import_export_fileScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Import_export_fileScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
