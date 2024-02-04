import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Integration_roleWhereInput } from "../../../inputs/Integration_roleWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyIntegration_roleArgs {
  @TypeGraphQL.Field(_type => Integration_roleWhereInput, {
    nullable: true
  })
  where?: Integration_roleWhereInput | undefined;
}
