import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Promotion_translationCreateManyInput } from "../../../inputs/Promotion_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPromotion_translationArgs {
  @TypeGraphQL.Field(_type => [Promotion_translationCreateManyInput], {
    nullable: false
  })
  data!: Promotion_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
