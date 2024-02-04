import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_cart_ruleCreateManyInput } from "../../../inputs/Promotion_cart_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_cart_ruleArgs {
  @TypeGraphQL.Field(_type => [Promotion_cart_ruleCreateManyInput], {
    nullable: false
  })
  data!: Promotion_cart_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
