import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/CurrencyOrderByWithRelationAndSearchRelevanceInput";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";
import { CurrencyWhereUniqueInput } from "../../../inputs/CurrencyWhereUniqueInput";
import { CurrencyScalarFieldEnum } from "../../../../enums/CurrencyScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CurrencyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: CurrencyOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => CurrencyWhereUniqueInput, {
    nullable: true
  })
  cursor?: CurrencyWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CurrencyScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "iso_code" | "factor" | "symbol" | "position" | "decimal_precision" | "created_at" | "updated_at" | "item_rounding" | "total_rounding" | "tax_free_from"> | undefined;
}
