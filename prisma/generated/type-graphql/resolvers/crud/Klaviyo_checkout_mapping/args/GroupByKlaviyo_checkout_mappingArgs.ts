import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Klaviyo_checkout_mappingOrderByWithAggregationInput } from "../../../inputs/Klaviyo_checkout_mappingOrderByWithAggregationInput";
import { Klaviyo_checkout_mappingScalarWhereWithAggregatesInput } from "../../../inputs/Klaviyo_checkout_mappingScalarWhereWithAggregatesInput";
import { Klaviyo_checkout_mappingWhereInput } from "../../../inputs/Klaviyo_checkout_mappingWhereInput";
import { Klaviyo_checkout_mappingScalarFieldEnum } from "../../../../enums/Klaviyo_checkout_mappingScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByKlaviyo_checkout_mappingArgs {
  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingWhereInput, {
    nullable: true
  })
  where?: Klaviyo_checkout_mappingWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: Klaviyo_checkout_mappingOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [Klaviyo_checkout_mappingScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "reference" | "mapping_table" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => Klaviyo_checkout_mappingScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: Klaviyo_checkout_mappingScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
