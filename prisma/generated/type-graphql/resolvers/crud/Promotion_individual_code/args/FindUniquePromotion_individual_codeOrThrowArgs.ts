import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeWhereUniqueInput } from "../../../inputs/Promotion_individual_codeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePromotion_individual_codeOrThrowArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_individual_codeWhereUniqueInput;
}
