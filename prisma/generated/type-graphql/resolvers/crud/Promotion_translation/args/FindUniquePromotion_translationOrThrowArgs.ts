import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationWhereUniqueInput } from "../../../inputs/Promotion_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePromotion_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_translationWhereUniqueInput;
}
