import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeUpdateManyMutationInput } from "../../../inputs/Promotion_individual_codeUpdateManyMutationInput";
import { Promotion_individual_codeWhereInput } from "../../../inputs/Promotion_individual_codeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_individual_codeArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_individual_codeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereInput, {
    nullable: true
  })
  where?: Promotion_individual_codeWhereInput | undefined;
}
