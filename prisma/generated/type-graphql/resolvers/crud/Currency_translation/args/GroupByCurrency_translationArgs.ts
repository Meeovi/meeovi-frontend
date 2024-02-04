import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Currency_translationOrderByWithAggregationInput } from "../../../inputs/Currency_translationOrderByWithAggregationInput";
import { Currency_translationScalarWhereWithAggregatesInput } from "../../../inputs/Currency_translationScalarWhereWithAggregatesInput";
import { Currency_translationWhereInput } from "../../../inputs/Currency_translationWhereInput";
import { Currency_translationScalarFieldEnum } from "../../../../enums/Currency_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCurrency_translationArgs {
  @TypeGraphQL.Field(_type => Currency_translationWhereInput, {
    nullable: true
  })
  where?: Currency_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Currency_translationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Currency_translationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"currency_id" | "language_id" | "short_name" | "name" | "custom_fields" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Currency_translationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Currency_translationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
