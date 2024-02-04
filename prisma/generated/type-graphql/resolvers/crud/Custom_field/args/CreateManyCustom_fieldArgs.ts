import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Custom_fieldCreateManyInput } from "../../../inputs/Custom_fieldCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustom_fieldArgs {
  @TypeGraphQL.Field(_type => [Custom_fieldCreateManyInput], {
    nullable: false
  })
  data!: Custom_fieldCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
