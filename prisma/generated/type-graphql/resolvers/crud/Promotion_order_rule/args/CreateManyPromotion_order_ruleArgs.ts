import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_order_ruleCreateManyInput } from "../../../inputs/Promotion_order_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_order_ruleArgs {
  @TypeGraphQL.Field(_type => [Promotion_order_ruleCreateManyInput], {
    nullable: false
  })
  data!: Promotion_order_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
