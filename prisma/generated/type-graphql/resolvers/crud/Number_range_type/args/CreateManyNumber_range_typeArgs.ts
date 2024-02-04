import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Number_range_typeCreateManyInput } from "../../../inputs/Number_range_typeCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNumber_range_typeArgs {
  @TypeGraphQL.Field(_type => [Number_range_typeCreateManyInput], {
    nullable: false
  })
  data!: Number_range_typeCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
