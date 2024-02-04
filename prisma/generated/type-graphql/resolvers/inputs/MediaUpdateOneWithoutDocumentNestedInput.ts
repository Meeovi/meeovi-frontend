import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MediaCreateOrConnectWithoutDocumentInput } from "../inputs/MediaCreateOrConnectWithoutDocumentInput";
import { MediaCreateWithoutDocumentInput } from "../inputs/MediaCreateWithoutDocumentInput";
import { MediaUpdateToOneWithWhereWithoutDocumentInput } from "../inputs/MediaUpdateToOneWithWhereWithoutDocumentInput";
import { MediaUpsertWithoutDocumentInput } from "../inputs/MediaUpsertWithoutDocumentInput";
import { MediaWhereInput } from "../inputs/MediaWhereInput";
import { MediaWhereUniqueInput } from "../inputs/MediaWhereUniqueInput";

@TypeGraphQL.InputType("MediaUpdateOneWithoutDocumentNestedInput", {})
export class MediaUpdateOneWithoutDocumentNestedInput {
  @TypeGraphQL.Field(_type => MediaCreateWithoutDocumentInput, {
    nullable: true
  })
  create?: MediaCreateWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => MediaCreateOrConnectWithoutDocumentInput, {
    nullable: true
  })
  connectOrCreate?: MediaCreateOrConnectWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpsertWithoutDocumentInput, {
    nullable: true
  })
  upsert?: MediaUpsertWithoutDocumentInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  disconnect?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereInput, {
    nullable: true
  })
  delete?: MediaWhereInput | undefined;

  @TypeGraphQL.Field(_type => MediaWhereUniqueInput, {
    nullable: true
  })
  connect?: MediaWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MediaUpdateToOneWithWhereWithoutDocumentInput, {
    nullable: true
  })
  update?: MediaUpdateToOneWithWhereWithoutDocumentInput | undefined;
}
