import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Document_base_configCreateWithoutMediaInput } from "../inputs/Document_base_configCreateWithoutMediaInput";
import { Document_base_configWhereUniqueInput } from "../inputs/Document_base_configWhereUniqueInput";

@TypeGraphQL.InputType("Document_base_configCreateOrConnectWithoutMediaInput", {})
export class Document_base_configCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Document_base_configWhereUniqueInput, {
    nullable: false
  })
  where!: Document_base_configWhereUniqueInput;

  @TypeGraphQL.Field(_type => Document_base_configCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Document_base_configCreateWithoutMediaInput;
}
