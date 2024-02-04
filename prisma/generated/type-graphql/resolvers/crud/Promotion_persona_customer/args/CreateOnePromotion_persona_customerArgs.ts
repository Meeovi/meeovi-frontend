import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerCreateInput } from "../../../inputs/Promotion_persona_customerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePromotion_persona_customerArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_customerCreateInput, {
    nullable: false
  })
  data!: Promotion_persona_customerCreateInput;
}
