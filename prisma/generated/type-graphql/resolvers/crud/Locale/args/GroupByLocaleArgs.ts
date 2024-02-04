import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LocaleOrderByWithAggregationInput } from "../../../inputs/LocaleOrderByWithAggregationInput";
import { LocaleScalarWhereWithAggregatesInput } from "../../../inputs/LocaleScalarWhereWithAggregatesInput";
import { LocaleWhereInput } from "../../../inputs/LocaleWhereInput";
import { LocaleScalarFieldEnum } from "../../../../enums/LocaleScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByLocaleArgs {
  @TypeGraphQL.Field(_type => LocaleWhereInput, {
    nullable: true
  })
  where?: LocaleWhereInput | undefined;

  @TypeGraphQL.Field(_type => [LocaleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LocaleOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [LocaleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "code" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => LocaleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LocaleScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
