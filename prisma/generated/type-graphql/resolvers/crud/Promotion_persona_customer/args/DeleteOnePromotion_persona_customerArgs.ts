import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerWhereUniqueInput } from "../../../inputs/Promotion_persona_customerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePromotion_persona_customerArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_persona_customerWhereUniqueInput;
}
