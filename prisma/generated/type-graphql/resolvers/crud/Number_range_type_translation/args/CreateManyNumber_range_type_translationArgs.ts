import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_type_translationCreateManyInput } from "../../../inputs/Number_range_type_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNumber_range_type_translationArgs {
  @TypeGraphQL.Field(_type => [Number_range_type_translationCreateManyInput], {
    nullable: false
  })
  data!: Number_range_type_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
