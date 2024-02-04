import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutDocumentInput } from "../inputs/MediaCreateOrConnectWithoutDocumentInput";
import { MediaCreateWithoutDocumentInput } from "../inputs/MediaCreateWithoutDocumentInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaCreateNestedOneWithoutDocumentInput", {})
export class MediaCreateNestedOneWithoutDocumentInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutDocumentInput, {
    nullable: true
  })
  create?: MediaCreateWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutDocumentInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;
}
