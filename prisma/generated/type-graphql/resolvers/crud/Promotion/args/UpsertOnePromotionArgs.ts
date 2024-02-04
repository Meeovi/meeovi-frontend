import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionCreateInput } from "../../../inputs/PromotionCreateInput";
import { PromotionUpdateInput } from "../../../inputs/PromotionUpdateInput";
import { PromotionWhereUniqueInput } from "../../../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotionArgs {
  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: false
  })
  where!: PromotionWhereUniqueInput;

  @TypeGraphQL.Field(_type => PromotionCreateInput, {
    nullable: false
  })
  create!: PromotionCreateInput;

  @TypeGraphQL.Field(_type => PromotionUpdateInput, {
    nullable: false
  })
  update!: PromotionUpdateInput;
}
