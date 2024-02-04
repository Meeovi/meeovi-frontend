import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountUpdateManyMutationInput } from "../../../inputs/Promotion_discountUpdateManyMutationInput";
import { Promotion_discountWhereInput } from "../../../inputs/Promotion_discountWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountUpdateManyMutationInput, {
    nullable: false
  })
  data!: Promotion_discountUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Promotion_discountWhereInput, {
    nullable: true
  })
  where?: Promotion_discountWhereInput | undefined;
}
