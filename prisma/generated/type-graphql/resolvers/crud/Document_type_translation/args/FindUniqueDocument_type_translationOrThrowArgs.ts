import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationWhereUniqueInput } from "../../../inputs/Document_type_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueDocument_type_translationOrThrowArgs {
  @TypeGraphQL.Field(_type => Document_type_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Document_type_translationWhereUniqueInput;
}
