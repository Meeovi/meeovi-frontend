import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { RuleWhereInput } from "../../../inputs/RuleWhereInput";

@TypeGraphQL.ArgsType()
export class Shipping_method_priceRule_shipping_method_price_calculation_rule_idToruleArgs {
  @TypeGraphQL.Field(_type => RuleWhereInput, {
    nullable: true
  })
  where?: RuleWhereInput | undefined;
}
