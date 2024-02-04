import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeCreateInput } from "../../../inputs/Promotion_individual_codeCreateInput";
import { Promotion_individual_codeUpdateInput } from "../../../inputs/Promotion_individual_codeUpdateInput";
import { Promotion_individual_codeWhereUniqueInput } from "../../../inputs/Promotion_individual_codeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePromotion_individual_codeArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_individual_codeWhereUniqueInput;

  @TypeGraphQL.Field(_type => Promotion_individual_codeCreateInput, {
    nullable: false
  })
  create!: Promotion_individual_codeCreateInput;

  @TypeGraphQL.Field(_type => Promotion_individual_codeUpdateInput, {
    nullable: false
  })
  update!: Promotion_individual_codeUpdateInput;
}
