import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationCreateInput } from "../../../inputs/Promotion_translationCreateInput";
import { Promotion_translationUpdateInput } from "../../../inputs/Promotion_translationUpdateInput";
import { Promotion_translationWhereUniqueInput } from "../../../inputs/Promotion_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_translationArgs {
  @TypeGraphQL.Field(_type => Promotion_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_translationCreateInput, {
    nullable: false
  })
  create!: Promotion_translationCreateInput;

  @TypeGraphQL.Field(_type => Promotion_translationUpdateInput, {
    nullable: false
  })
  update!: Promotion_translationUpdateInput;
}
