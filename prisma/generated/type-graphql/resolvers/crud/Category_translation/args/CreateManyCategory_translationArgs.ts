import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Category_translationCreateManyInput } from "../../../inputs/Category_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCategory_translationArgs {
  @TypeGraphQL.Field(_type => [Category_translationCreateManyInput], {
    nullable: false
  })
  data!: Category_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
