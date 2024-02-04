import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeUpdateInput } from "../../../inputs/Promotion_individual_codeUpdateInput";
import { Promotion_individual_codeWhereUniqueInput } from "../../../inputs/Promotion_individual_codeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePromotion_individual_codeArgs {
  @TypeGraphQL.Field(_type => Promotion_individual_codeUpdateInput, {
    nullable: false
  })
  data!: Promotion_individual_codeUpdateInput;

  @TypeGraphQL.Field(_type => Promotion_individual_codeWhereUniqueInput, {
    nullable: false
  })
  where!: Promotion_individual_codeWhereUniqueInput;
}
