import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeCreateInput } from "../../../inputs/Promotion_individual_codeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_individual_codeArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeCreateInput, {
    nullable: false
  })
  data!: Promotion_individual_codeCreateInput;
}
