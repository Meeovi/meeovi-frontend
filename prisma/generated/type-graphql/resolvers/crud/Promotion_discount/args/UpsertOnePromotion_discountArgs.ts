import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_discountCreateInput } from "../../../inputs/Promotion_discountCreateInput";
import { Promotion_discountUpdateInput } from "../../../inputs/Promotion_discountUpdateInput";
import { Promotion_discountWhereUniqueInput } from "../../../inputs/Promotion_discountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_discountArgs {
  @TypeGraphQL.Field(_type => Promotion_discountWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_discountWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_discountCreateInput, {
    nullable: false
  })
  create!: Promotion_discountCreateInput;

  @TypeGraphQL.Field(_type => Promotion_discountUpdateInput, {
    nullable: false
  })
  update!: Promotion_discountUpdateInput;
}
