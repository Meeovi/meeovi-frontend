import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PromotionCreateManyInput } from "../../../inputs/PromotionCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotionArgs {
  @TypeGraphQL.Field(_type => [PromotionCreateManyInput], {
    nullable: false
  })
  data!: PromotionCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
