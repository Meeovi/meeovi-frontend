import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Property_group_translationCreateManyInput } from "../../../inputs/Property_group_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyProperty_group_translationArgs {
  @TypeGraphQL.Field(_type => [Property_group_translationCreateManyInput], {
    nullable: false
  })
  data!: Property_group_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
