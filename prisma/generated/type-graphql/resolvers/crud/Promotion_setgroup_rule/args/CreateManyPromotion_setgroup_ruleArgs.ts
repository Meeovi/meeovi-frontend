import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroup_ruleCreateManyInput } from "../../../inputs/Promotion_setgroup_ruleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_setgroup_ruleArgs {
  @TypeGraphQL.Field(_type => [Promotion_setgroup_ruleCreateManyInput], {
    nullable: false
  })
  data!: Promotion_setgroup_ruleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
