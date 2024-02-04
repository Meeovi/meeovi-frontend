import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerCreateInput } from "../../../inputs/Promotion_persona_customerCreateInput";
import { Promotion_persona_customerUpdateInput } from "../../../inputs/Promotion_persona_customerUpdateInput";
import { Promotion_persona_customerWhereUniqueInput } from "../../../inputs/Promotion_persona_customerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_persona_customerArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_customerWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_persona_customerWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_persona_customerCreateInput, {
    nullable: false
  })
  create!: Promotion_persona_customerCreateInput;

  @TypeGraphQL.Field(_type => Promotion_persona_customerUpdateInput, {
    nullable: false
  })
  update!: Promotion_persona_customerUpdateInput;
}
