import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationUpdateInput } from "../../../inputs/Promotion_translationUpdateInput";
import { Promotion_translationWhereUniqueInput } from "../../../inputs/Promotion_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_translationArgs {
  @TypeGraphQL.Field(_type => Promotion_translationUpdateInput, {
    nullable: false
  })
  data!: Promotion_translationUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_translationWhereUniqueInput;
}
