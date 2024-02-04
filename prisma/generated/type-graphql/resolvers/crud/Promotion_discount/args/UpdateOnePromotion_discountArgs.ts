import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountUpdateInput } from "../../../inputs/Promotion_discountUpdateInput";
import { Promotion_discountWhereUniqueInput } from "../../../inputs/Promotion_discountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountUpdateInput, {
    nullable: false
  })
  data!: Promotion_discountUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_discountWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discountWhereUniqueInput;
}
