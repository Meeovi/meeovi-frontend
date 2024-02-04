import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleCreateManyInput } from "../../../inputs/Integration_roleCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyIntegration_roleArgs {
  @TypeGraphQL.Field(_type => [Integration_roleCreateManyInput], {
    nullable: false
  })
  data!: Integration_roleCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
