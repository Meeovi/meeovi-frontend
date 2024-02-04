import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DocumentCreateWithoutOrderInput } from "../inputs/DocumentCreateWithoutOrderInput";
import { DocumentWhereUniqueInput } from "../inputs/DocumentWhereUniqueInput";

@TypeGraphQL.InputType("DocumentCreateOrConnectWithoutOrderInput", {})
export class DocumentCreateOrConnectWithoutOrderInput {
  @TypeGraphQL.Field(_type => DocumentWhereUniqueInput, {
    nullable: false
  })
  where!: DocumentWhereUniqueInput;

  @TypeGraphQL.Field(_type => DocumentCreateWithoutOrderInput, {
    nullable: false
  })
  create!: DocumentCreateWithoutOrderInput;
}
