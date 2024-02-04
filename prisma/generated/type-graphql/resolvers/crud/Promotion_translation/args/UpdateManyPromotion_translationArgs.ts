import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationUpdateManyMutationInput } from "../../../inputs/Promotion_translationUpdateManyMutationInput";
import { Promotion_translationWhereInput } from "../../../inputs/Promotion_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_translationArgs {
  @TypeGraphQL.Field(_type => Promotion_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_translationWhereInput, {
    nullable: true
  })
  where?: Promotion_translationWhereInput | undefined;
}
