import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionUpdateInput } from "../../../inputs/PromotionUpdateInput";
import { PromotionWhereUniqueInput } from "../../../inputs/PromotionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotionArgs {
  @TypeGraphQL.Field(_type => PromotionUpdateInput, {
    nullable: false
  })
  data!: PromotionUpdateInput;

  @TypeGraphQL.Field(_type => PromotionWhereUniqueInput, {
    nullable: false
  })
  where!: PromotionWhereUniqueInput;
}
