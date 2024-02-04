import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionUpdateManyMutationInput } from "../../../inputs/PromotionUpdateManyMutationInput";
import { PromotionWhereInput } from "../../../inputs/PromotionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotionArgs {
  @TypeGraphQL.Field(_type => PromotionUpdateManyMutationInput, {
    nullable: false
  })
  data!: PromotionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PromotionWhereInput, {
    nullable: true
  })
  where?: PromotionWhereInput | undefined;
}
