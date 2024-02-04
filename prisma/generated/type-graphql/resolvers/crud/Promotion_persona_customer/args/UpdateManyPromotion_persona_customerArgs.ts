import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_persona_customerUpdateManyMutationInput } from "../../../inputs/Promotion_persona_customerUpdateManyMutationInput";
import { Promotion_persona_customerWhereInput } from "../../../inputs/Promotion_persona_customerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_persona_customerArgs {
  @TypeGraphQL.Field(_type => Promotion_persona_customerUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_persona_customerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_persona_customerWhereInput, {
    nullable: true
  })
  where?: Promotion_persona_customerWhereInput | undefined;
}
