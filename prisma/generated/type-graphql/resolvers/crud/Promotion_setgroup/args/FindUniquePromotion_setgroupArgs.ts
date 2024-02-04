import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_setgroupWhereUniqueInput } from "../../../inputs/Promotion_setgroupWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePromotion_setgroupArgs {
  @TypeGraphQL.Field(_type => Promotion_setgroupWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_setgroupWhereUniqueInput;
}
