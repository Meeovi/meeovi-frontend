import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupCreateInput } from "../../../inputs/Promotion_setgroupCreateInput";
import { Promotion_setgroupUpdateInput } from "../../../inputs/Promotion_setgroupUpdateInput";
import { Promotion_setgroupWhereUniqueInput } from "../../../inputs/Promotion_setgroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_setgroupWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_setgroupCreateInput, {
    nullable: false
  })
  create!: Promotion_setgroupCreateInput;

  @TypeGraphQL.Field(_type => Promotion_setgroupUpdateInput, {
    nullable: false
  })
  update!: Promotion_setgroupUpdateInput;
}
