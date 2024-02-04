import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_individual_codeCreateManyInput } from "../../../inputs/Promotion_individual_codeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_individual_codeArgs {
  @TypeGraphQL.Field(_type => [Promotion_individual_codeCreateManyInput], {
    nullable: false
  })
  data!: Promotion_individual_codeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
