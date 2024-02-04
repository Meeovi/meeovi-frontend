import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupUpdateInput } from "../../../inputs/Promotion_setgroupUpdateInput";
import { Promotion_setgroupWhereUniqueInput } from "../../../inputs/Promotion_setgroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupUpdateInput, {
    nullable: false
  })
  data!: Promotion_setgroupUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_setgroupWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_setgroupWhereUniqueInput;
}
