import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discount_ruleCreateManyInput } from "../../../inputs/Promotion_discount_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_discount_ruleArgs {
  @TypeGraphQL.Field(_type => [Promotion_discount_ruleCreateManyInput], {
    nullable: false
  })
  data!: Promotion_discount_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
